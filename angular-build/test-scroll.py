from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # --- Desktop tests ---
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    page.goto('http://localhost:4202')
    page.wait_for_load_state('networkidle')
    time.sleep(3)
    
    page.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-initial.png')
    
    page.evaluate('window.scrollTo(0, 720)')
    time.sleep(3)
    page.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-spread.png')
    
    page.evaluate('window.scrollTo(0, 1440)')
    time.sleep(3)
    page.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-center-clear.png')
    
    page.evaluate('window.scrollTo(0, 2040)')
    time.sleep(3)
    page.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-reveal.png')
    page.close()
    
    # --- Mobile test (iPhone 12 viewport) ---
    mobile = browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True)
    mobile.goto('http://localhost:4202')
    mobile.wait_for_load_state('networkidle')
    time.sleep(3)
    
    mobile.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-mobile-initial.png')
    
    mobile.evaluate('window.scrollTo(0, 800)')
    time.sleep(3)
    mobile.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-mobile-spread.png')
    
    mobile.evaluate('window.scrollTo(0, 1700)')
    time.sleep(3)
    mobile.screenshot(path='c:/Users/adam/Documents/Website/adamjuwaied.github.io/angular-build/screenshot-mobile-reveal.png')
    mobile.close()
    
    browser.close()
    print("Screenshots saved!")
