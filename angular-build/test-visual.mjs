import puppeteer from 'puppeteer';
import { setTimeout as sleep } from 'timers/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = __dirname;
const URL = 'http://localhost:4203';

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=swiftshader'],
  });

  try {
    // --- Desktop tests ---
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await sleep(3000);

    // 1. Initial state
    await page.screenshot({ path: path.join(BASE, 'test-01-initial.png'), fullPage: false });
    console.log('1. Initial state captured');

    // 2. Scroll to spread particles
    await page.evaluate(() => window.scrollTo(0, 720));
    await sleep(4000);
    await page.screenshot({ path: path.join(BASE, 'test-02-spread.png'), fullPage: false });
    console.log('2. Spread state captured (scroll 720)');

    // 3. Mouse sweep to test interactivity
    for (let x = 100; x < 1200; x += 50) {
      await page.mouse.move(x, 500);
      await sleep(30);
    }
    await sleep(1000);
    await page.screenshot({ path: path.join(BASE, 'test-03-after-mouse-sweep.png'), fullPage: false });
    console.log('3. After mouse sweep (particles should be displaced)');

    // 4. Wait for settle
    await sleep(4000);
    await page.screenshot({ path: path.join(BASE, 'test-04-settled.png'), fullPage: false });
    console.log('4. Settled after sweep');

    // 5. Scroll back
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(4000);
    await page.screenshot({ path: path.join(BASE, 'test-05-scroll-back.png'), fullPage: false });
    console.log('5. Scroll back to top');

    // 6. Check header z-index — inspect logo visibility
    const headerVisible = await page.evaluate(() => {
      const logo = document.querySelector('.logo');
      if (!logo) return { found: false };
      const rect = logo.getBoundingClientRect();
      const style = window.getComputedStyle(logo);
      return {
        found: true,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        color: style.color,
        zIndex: style.zIndex,
        visibility: style.visibility,
        opacity: style.opacity,
      };
    });
    console.log('6. Header logo state:', JSON.stringify(headerVisible, null, 2));

    // 7. Check canvas states
    const canvasInfo = await page.evaluate(() => {
      const dustCanvas = document.querySelector('.dust-gl');
      const vigCanvas = document.querySelector('.vig-gl');
      const result = {};
      if (dustCanvas) {
        const style = window.getComputedStyle(dustCanvas);
        result.dust = {
          width: dustCanvas.width,
          height: dustCanvas.height,
          mixBlendMode: style.mixBlendMode,
          zIndex: style.zIndex,
          position: style.position,
        };
      }
      if (vigCanvas) {
        const style = window.getComputedStyle(vigCanvas);
        result.vig = {
          tagName: vigCanvas.tagName,
          width: vigCanvas.width,
          height: vigCanvas.height,
          mixBlendMode: style.mixBlendMode,
          zIndex: style.zIndex,
          position: style.position,
        };
      }
      // Check light rays
      const lr = document.querySelector('app-light-rays');
      if (lr) {
        const style = window.getComputedStyle(lr);
        result.lightRays = {
          zIndex: style.zIndex,
          position: style.position,
          mixBlendMode: style.mixBlendMode,
        };
      }
      // Check content
      const content = document.querySelector('.app-shell__content');
      if (content) {
        const style = window.getComputedStyle(content);
        result.content = {
          zIndex: style.zIndex,
          position: style.position,
        };
      }
      return result;
    });
    console.log('7. Canvas/layer info:', JSON.stringify(canvasInfo, null, 2));

    // 8. Read pixel data from dust canvas to verify particles are rendering
    const pixelData = await page.evaluate(() => {
      const canvas = document.querySelector('.dust-gl');
      if (!canvas) return { error: 'no canvas' };
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      if (!gl) return { error: 'no gl context' };
      
      const w = canvas.width, h = canvas.height;
      // Sample several points across the canvas
      const samples = [];
      const positions = [
        [w * 0.5, h * 0.5],   // center
        [w * 0.5, h * 0.8],   // bottom center (where most particles should be)
        [w * 0.25, h * 0.7],  // left-bottom
        [w * 0.75, h * 0.7],  // right-bottom
        [w * 0.5, h * 0.2],   // top center (should be sparse)
      ];
      
      const pixel = new Uint8Array(4);
      for (const [x, y] of positions) {
        gl.readPixels(Math.floor(x), Math.floor(h - y), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
        samples.push({
          pos: `(${Math.floor(x)}, ${Math.floor(y)})`,
          rgba: [pixel[0], pixel[1], pixel[2], pixel[3]],
        });
      }
      
      // Count non-zero pixels across a strip at 80% height
      let nonZeroCount = 0;
      const stripY = Math.floor(h * 0.2); // GL y is flipped, so h*0.2 = screen 80%
      const stripPixels = new Uint8Array(4);
      for (let sx = 0; sx < w; sx += 10) {
        gl.readPixels(sx, stripY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, stripPixels);
        if (stripPixels[3] > 0) nonZeroCount++;
      }
      
      return {
        canvasSize: [w, h],
        samples,
        nonZeroInStrip: nonZeroCount,
        stripSampled: Math.ceil(w / 10),
      };
    });
    console.log('8. Pixel data (particles rendering?):', JSON.stringify(pixelData, null, 2));

    // 9. Check WebGL errors
    const glErrors = await page.evaluate(() => {
      const canvas = document.querySelector('.dust-gl');
      if (!canvas) return 'no canvas';
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      if (!gl) return 'no context';
      const err = gl.getError();
      return err === gl.NO_ERROR ? 'NO_ERROR' : `GL ERROR: ${err}`;
    });
    console.log('9. WebGL status:', glErrors);

    // --- Mobile test ---
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await mobilePage.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
    await sleep(3000);
    await mobilePage.screenshot({ path: path.join(BASE, 'test-10-mobile.png'), fullPage: false });
    console.log('10. Mobile initial state captured');

    await mobilePage.close();
    await page.close();
  } finally {
    await browser.close();
  }

  console.log('\nAll tests complete! Screenshots saved to:', BASE);
}

run().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
