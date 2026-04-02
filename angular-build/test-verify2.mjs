#!/usr/bin/env node
// Comprehensive visual verification of dust-particles-gl
// Tests: DOM, canvas sizing, z-index, console diagnostics, mouse interaction, scroll

import puppeteer from 'puppeteer';

const URL = 'http://localhost:4203';
const P = '\x1b[32m✓\x1b[0m';
const F = '\x1b[31m✗\x1b[0m';
const I = '\x1b[36mℹ\x1b[0m';

let passed = 0, failed = 0;
function ok(label, cond) {
  if (cond) { console.log(`  ${P} ${label}`); passed++; }
  else { console.log(`  ${F} ${label}`); failed++; }
}

(async () => {
  const logs = [];
  const errors = [];

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--window-size=1440,900'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  });
  const page = await browser.newPage();
  page.on('console', msg => {
    logs.push(msg.text());
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  console.log(`\n${I} Loading ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait 3 seconds for init + a couple animation frames worth of diagnostic logs
  await new Promise(r => setTimeout(r, 3000));

  // ── 1. DOM + CSS ──
  console.log('\n── 1. DOM Structure & CSS ──');
  const dom = await page.evaluate(() => {
    const host = document.querySelector('app-dust-particles-gl');
    if (!host) return { found: false };
    const hs = getComputedStyle(host);
    const dust = host.querySelector('.dust-gl');
    const vig = host.querySelector('.vig-gl');
    const ds = dust ? getComputedStyle(dust) : null;
    const vs = vig ? getComputedStyle(vig) : null;
    const content = document.querySelector('.app-shell__content');
    const cs = content ? getComputedStyle(content) : null;
    const header = document.querySelector('header');
    const headerS = header ? getComputedStyle(header) : null;
    return {
      found: true,
      host: { pos: hs.position, z: hs.zIndex, blend: hs.mixBlendMode },
      dust: dust ? { pos: ds.position, z: ds.zIndex, blend: ds.mixBlendMode, w: dust.width, h: dust.height, dataDust: dust.hasAttribute('data-dust') } : null,
      vig: vig ? { pos: vs.position, z: vs.zIndex, blend: vs.mixBlendMode, w: vig.width, h: vig.height } : null,
      content: content ? { pos: cs.position, z: cs.zIndex } : null,
      header: header ? { pos: headerS.position, z: headerS.zIndex } : null,
    };
  });

  ok('Component found', dom.found);
  ok('Host: position=fixed, z=2', dom.host?.pos === 'fixed' && dom.host?.z === '2');
  ok('Dust: position=absolute, blend=screen', dom.dust?.pos === 'absolute' && dom.dust?.blend === 'screen');
  ok('Dust: has data-dust attribute', dom.dust?.dataDust === true);
  ok('Dust: canvas full size (>1400)', dom.dust?.w > 1400);
  ok('Vig: position=absolute, NO multiply blend', dom.vig?.pos === 'absolute' && dom.vig?.blend === 'normal');
  ok('Vig: canvas full size', dom.vig?.w > 1400);
  ok('Content z-index > host z-index', parseInt(dom.content?.z) > parseInt(dom.host?.z));
  console.log(`  ${I} Host blend=${dom.host?.blend}, Vig blend=${dom.vig?.blend}, Dust blend=${dom.dust?.blend}`);
  console.log(`  ${I} Content z=${dom.content?.z}, Host z=${dom.host?.z}`);

  // ── 2. Console Diagnostics ──
  console.log('\n── 2. Console Diagnostics ──');
  const initLog = logs.find(l => l.includes('[DustGL] Init:'));
  const diagLog = logs.find(l => l.includes('[DustGL] f='));
  ok('[DustGL] Init log present', !!initLog);
  if (initLog) console.log(`  ${I} ${initLog}`);
  ok('[DustGL] Diagnostic log (animation running)', !!diagLog);
  if (diagLog) console.log(`  ${I} ${diagLog}`);
  ok('No JS errors', errors.length === 0);
  errors.forEach(e => console.log(`  ${F} Error: ${e}`));

  // ── 3. Screenshot: Initial State ──
  console.log('\n── 3. Initial State ──');
  await page.screenshot({ path: 'test-01-initial.png' });
  console.log(`  ${I} Saved test-01-initial.png`);

  // ── 4. Mouse Interaction ──
  // Sweep mouse through the BOTTOM half where particles are dense
  console.log('\n── 4. Mouse Interaction ──');
  const beforeInteract = logs.filter(l => l.includes('[DustGL] f=')).slice(-1)[0];

  // Move mouse to bottom-center where particles are dense
  await page.mouse.move(720, 750);
  await new Promise(r => setTimeout(r, 200));
  // Sweep horizontally through the particle-dense region
  for (let x = 300; x < 1100; x += 15) {
    await page.mouse.move(x, 750);
    await new Promise(r => setTimeout(r, 20));
  }
  await new Promise(r => setTimeout(r, 2000)); // wait for fluid response

  await page.screenshot({ path: 'test-02-mouse-sweep.png' });
  console.log(`  ${I} Saved test-02-mouse-sweep.png`);

  // Check diagnostic logs for active particles
  const afterInteract = logs.filter(l => l.includes('[DustGL] f='));
  const mouseLog = afterInteract.find(l => l.includes('mouse=ON') && l.includes('active='));
  ok('Mouse detected as active in diagnostics', !!mouseLog);
  if (mouseLog) {
    const activeMatch = mouseLog.match(/active=(\d+)/);
    const activeCount = parseInt(activeMatch?.[1] || '0');
    ok(`Active particles > 0 (got ${activeCount})`, activeCount > 0);
    console.log(`  ${I} ${mouseLog}`);
  }

  // ── 5. Scroll Transition ──
  console.log('\n── 5. Scroll Transition ──');
  // Scroll down to trigger the homepage spread
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 2500));

  await page.screenshot({ path: 'test-03-scrolled.png' });
  console.log(`  ${I} Saved test-03-scrolled.png`);

  const scrollLog = logs.filter(l => l.includes('[DustGL] f=')).find(l => {
    const m = l.match(/scroll=(\d+\.\d+)/);
    return m && parseFloat(m[1]) > 0.01;
  });
  ok('scrollProgress > 0 after scroll', !!scrollLog);
  if (scrollLog) console.log(`  ${I} ${scrollLog}`);

  // ── 6. Twinkle (opacity change over time) ──
  console.log('\n── 6. Twinkle (opacity change) ──');
  const opacityLogs = logs.filter(l => l.includes('op0=')).map(l => {
    const m = l.match(/op0=(\d+\.\d+)/);
    return m ? parseFloat(m[1]) : null;
  }).filter(v => v !== null);
  if (opacityLogs.length >= 2) {
    const uniqueVals = new Set(opacityLogs.map(v => v.toFixed(4)));
    ok(`Opacity changing over time (${uniqueVals.size} unique values from ${opacityLogs.length} samples)`, uniqueVals.size > 1);
    console.log(`  ${I} Opacity samples: ${opacityLogs.slice(0, 5).map(v => v.toFixed(4)).join(', ')}`);
  } else {
    console.log(`  ${F} Not enough opacity samples (got ${opacityLogs.length})`);
    failed++;
  }

  // ── 7. Header Clickability ──
  console.log('\n── 7. Header Nav ──');
  // Scroll back to top first
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 500));

  const headerCheck = await page.evaluate(() => {
    const logo = document.querySelector('.logo');
    if (!logo) return { found: false };
    const rect = logo.getBoundingClientRect();
    const style = getComputedStyle(logo);
    // Check if element at logo position is the logo itself (not covered)
    const elem = document.elementFromPoint(rect.x + rect.width/2, rect.y + rect.height/2);
    return {
      found: true,
      visible: style.visibility !== 'hidden' && style.display !== 'none',
      opacity: style.opacity,
      topElement: elem?.className || elem?.tagName || 'unknown',
      isClickable: elem === logo || elem?.closest('.logo') === logo || elem?.closest('a') === logo,
    };
  });
  ok('Logo found', headerCheck.found);
  ok('Logo visible', headerCheck.visible);
  ok(`Logo clickable (topElement: ${headerCheck.topElement})`, headerCheck.isClickable);

  // ── Summary ──
  console.log(`\n── Summary: ${passed} passed, ${failed} failed ──\n`);

  // Print all diagnostic logs
  const allDiag = logs.filter(l => l.includes('[DustGL]'));
  if (allDiag.length > 0) {
    console.log('── All [DustGL] logs ──');
    allDiag.forEach(l => console.log(`  ${l}`));
  }

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
