from playwright.sync_api import sync_playwright
import time

BASE = 'c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # --- Desktop tests ---
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    page.goto('http://localhost:4203')
    page.wait_for_load_state('networkidle')
    time.sleep(3)
    
    # 1. Initial state — particles at home (bottom band)
    page.screenshot(path=f'{BASE}/test-01-initial.png')
    print("1. Initial state captured")
    
    # 2. Scroll to spread particles
    page.evaluate('window.scrollTo(0, 720)')
    time.sleep(4)  # Wait for smooth anchor transition
    page.screenshot(path=f'{BASE}/test-02-spread.png')
    print("2. Spread state captured (scroll 720)")
    
    # 3. Move mouse across spread particles to test interactivity
    # Sweep from left to right across the middle of the screen
    for x in range(100, 1200, 50):
        page.mouse.move(x, 400)
        time.sleep(0.03)
    time.sleep(1)
    page.screenshot(path=f'{BASE}/test-03-after-mouse-sweep.png')
    print("3. After mouse sweep captured (particles should be displaced)")
    
    # 4. Wait for particles to settle back to spread anchors (3-4s)
    time.sleep(4)
    page.screenshot(path=f'{BASE}/test-04-settled-after-sweep.png')
    print("4. Settled after sweep (particles should return to spread positions)")
    
    # 5. Scroll back to top — particles should return home
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(4)
    page.screenshot(path=f'{BASE}/test-05-scroll-back-home.png')
    print("5. Scroll back to top (particles should return to original positions)")
    
    # 6. Scroll to spread again, then wait 12s for inactivity reset
    page.evaluate('window.scrollTo(0, 720)')
    time.sleep(4)
    page.screenshot(path=f'{BASE}/test-06-spread-again.png')
    print("6. Spread again captured")
    
    # Now wait 12 seconds (10s timeout + 2s buffer for animation)
    print("   Waiting 12s for inactivity reset...")
    time.sleep(12)
    page.screenshot(path=f'{BASE}/test-07-after-inactivity-reset.png')
    print("7. After 12s inactivity (particles should be drifting back to home)")
    
    # Wait a bit more for full reset
    time.sleep(5)
    page.screenshot(path=f'{BASE}/test-08-full-reset.png')
    print("8. Full reset after 17s inactivity")
    
    # --- Mobile test ---
    page.close()
    mobile = browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True)
    mobile.goto('http://localhost:4203')
    mobile.wait_for_load_state('networkidle')
    time.sleep(3)
    
    mobile.screenshot(path=f'{BASE}/test-09-mobile-initial.png')
    print("9. Mobile initial state")
    
    mobile.evaluate('window.scrollTo(0, 800)')
    time.sleep(4)
    mobile.screenshot(path=f'{BASE}/test-10-mobile-spread.png')
    print("10. Mobile spread state")
    
    # Touch interaction on mobile spread
    mobile.touchscreen.tap(195, 422)
    time.sleep(0.5)
    for y in range(200, 700, 30):
        mobile.evaluate(f'''
            const touch = new Touch({{identifier: 0, target: document.body, clientX: 195, clientY: {y}}});
            const evt = new TouchEvent('touchmove', {{touches: [touch], changedTouches: [touch]}});
            window.dispatchEvent(evt);
        ''')
        time.sleep(0.03)
    time.sleep(1)
    mobile.screenshot(path=f'{BASE}/test-11-mobile-after-touch.png')
    print("11. Mobile after touch interaction")
    
    mobile.close()
    browser.close()
    print("\nAll screenshots saved!")
