#!/usr/bin/env node
// Visual verification test for dust-particles-gl component
// Tests: DOM structure, z-index stacking, canvas sizing, WebGL context, console errors

import puppeteer from 'puppeteer';

const URL = 'http://localhost:4203';
const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';
const INFO = '\x1b[36mℹ\x1b[0m';

let passed = 0, failed = 0;
function check(label, condition) {
  if (condition) { console.log(`  ${PASS} ${label}`); passed++; }
  else { console.log(`  ${FAIL} ${label}`); failed++; }
}

(async () => {
  const consoleMessages = [];
  const consoleErrors = [];

  // Launch headful for real WebGL rendering on macOS
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--window-size=1440,900'],
    defaultViewport: { width: 1440, height: 900 },
  });
  const page = await browser.newPage();
  page.on('console', msg => {
    consoleMessages.push(msg.text());
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  console.log(`\n${INFO} Loading ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 4000)); // let particles initialize

  // ===== 1. DOM Structure =====
  console.log('\n── DOM Structure ──');
  const dom = await page.evaluate(() => {
    const host = document.querySelector('app-dust-particles-gl');
    if (!host) return { found: false };

    const hostStyle = getComputedStyle(host);
    const dustCanvas = host.querySelector('.dust-gl');
    const vigCanvas = host.querySelector('.vig-gl');
    const dustStyle = dustCanvas ? getComputedStyle(dustCanvas) : null;
    const vigStyle = vigCanvas ? getComputedStyle(vigCanvas) : null;
    const content = document.querySelector('.app-shell__content');
    const contentStyle = content ? getComputedStyle(content) : null;
    const header = document.querySelector('header');
    const headerStyle = header ? getComputedStyle(header) : null;
    const lightRays = document.querySelector('app-light-rays');
    const raysStyle = lightRays ? getComputedStyle(lightRays) : null;

    return {
      found: true,
      host: {
        position: hostStyle.position,
        zIndex: hostStyle.zIndex,
        inset: hostStyle.inset,
      },
      dust: dustCanvas ? {
        tag: dustCanvas.tagName,
        position: dustStyle.position,
        zIndex: dustStyle.zIndex,
        mixBlend: dustStyle.mixBlendMode,
        bufferW: dustCanvas.width,
        bufferH: dustCanvas.height,
        cssW: dustStyle.width,
        cssH: dustStyle.height,
      } : null,
      vig: vigCanvas ? {
        tag: vigCanvas.tagName,
        position: vigStyle.position,
        zIndex: vigStyle.zIndex,
        mixBlend: vigStyle.mixBlendMode,
        bufferW: vigCanvas.width,
        bufferH: vigCanvas.height,
        cssW: vigStyle.width,
        cssH: vigStyle.height,
      } : null,
      content: content ? {
        position: contentStyle.position,
        zIndex: contentStyle.zIndex,
      } : null,
      header: header ? {
        position: headerStyle.position,
        zIndex: headerStyle.zIndex,
        visible: headerStyle.display !== 'none' && headerStyle.visibility !== 'hidden',
      } : null,
      rays: lightRays ? {
        position: raysStyle.position,
        zIndex: raysStyle.zIndex,
        mixBlend: raysStyle.mixBlendMode,
      } : null,
    };
  });

  check('Component found', dom.found);
  if (!dom.found) { await browser.close(); process.exit(1); }

  console.log(`  ${INFO} Host: position=${dom.host.position}, z-index=${dom.host.zIndex}`);
  check('Host position: fixed', dom.host.position === 'fixed');
  check('Host z-index: 2', dom.host.zIndex === '2');

  console.log(`  ${INFO} Dust canvas: position=${dom.dust?.position}, z-index=${dom.dust?.zIndex}, blend=${dom.dust?.mixBlend}`);
  check('Dust canvas exists', !!dom.dust);
  check('Dust canvas position: absolute', dom.dust?.position === 'absolute');
  check('Dust canvas mix-blend-mode: screen', dom.dust?.mixBlend === 'screen');
  check('Dust canvas buffer > 300', dom.dust?.bufferW > 300);
  console.log(`  ${INFO} Dust buffer: ${dom.dust?.bufferW}x${dom.dust?.bufferH}, CSS: ${dom.dust?.cssW}x${dom.dust?.cssH}`);

  console.log(`  ${INFO} Vig canvas: position=${dom.vig?.position}, z-index=${dom.vig?.zIndex}, blend=${dom.vig?.mixBlend}`);
  check('Vig canvas exists', !!dom.vig);
  check('Vig canvas position: absolute', dom.vig?.position === 'absolute');
  check('Vig canvas mix-blend-mode: multiply', dom.vig?.mixBlend === 'multiply');
  check('Vig canvas buffer > 300', dom.vig?.bufferW > 300);
  console.log(`  ${INFO} Vig buffer: ${dom.vig?.bufferW}x${dom.vig?.bufferH}, CSS: ${dom.vig?.cssW}x${dom.vig?.cssH}`);

  // ===== 2. Z-Index Stacking =====
  console.log('\n── Z-Index Stacking ──');
  console.log(`  ${INFO} Light rays: position=${dom.rays?.position}, z-index=${dom.rays?.zIndex}, blend=${dom.rays?.mixBlend}`);
  console.log(`  ${INFO} Dust host: z-index=${dom.host.zIndex}`);
  console.log(`  ${INFO} Content: position=${dom.content?.position}, z-index=${dom.content?.zIndex}`);
  console.log(`  ${INFO} Header: position=${dom.header?.position}, z-index=${dom.header?.zIndex}`);

  const raysZ = parseInt(dom.rays?.zIndex) || 0;
  const hostZ = parseInt(dom.host.zIndex) || 0;
  const contentZ = parseInt(dom.content?.zIndex) || 0;

  check('Rays(1) < DustHost(2)', raysZ < hostZ);
  check('DustHost(2) < Content(3)', hostZ < contentZ);
  check('Header visible', dom.header?.visible);

  // ===== 3. Console Output =====
  console.log('\n── Console Output ──');
  const dustGLLog = consoleMessages.find(m => m.startsWith('[DustGL]'));
  check('[DustGL] init logged', !!dustGLLog);
  if (dustGLLog) console.log(`  ${INFO} ${dustGLLog}`);
  check('No JS errors', consoleErrors.length === 0);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log(`  ${FAIL} Error: ${e}`));
  }

  // ===== 4. Pixel Sampling =====
  console.log('\n── Pixel Sampling (dust canvas) ──');
  const pixels = await page.evaluate(() => {
    const canvas = document.querySelector('.dust-gl');
    if (!canvas) return null;
    // Try to read pixels from the WebGL context
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return { error: 'no gl context (already acquired by Three.js — expected)' };
    return { error: 'unexpected: got context' };
  });
  console.log(`  ${INFO} GL context check: ${pixels?.error || 'unknown'}`);

  // ===== 5. Screenshot =====
  console.log('\n── Screenshots ──');
  await page.screenshot({ path: 'verify-01-initial.png' });
  console.log(`  ${INFO} Saved verify-01-initial.png`);

  // Move mouse to center to trigger interaction
  await page.mouse.move(720, 450);
  await new Promise(r => setTimeout(r, 500));
  // Sweep mouse
  for (let x = 400; x < 1000; x += 20) {
    await page.mouse.move(x, 450);
    await new Promise(r => setTimeout(r, 30));
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'verify-02-after-mouse.png' });
  console.log(`  ${INFO} Saved verify-02-after-mouse.png`);

  // Scroll down
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'verify-03-scrolled.png' });
  console.log(`  ${INFO} Saved verify-03-scrolled.png`);

  // ===== Summary =====
  console.log(`\n── Summary: ${passed} passed, ${failed} failed ──\n`);

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
