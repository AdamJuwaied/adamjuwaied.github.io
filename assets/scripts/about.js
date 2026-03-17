const background = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/bm.json'
});

const arrow = bodymovin.loadAnimation({
    container: document.getElementById('arrows'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/arrows.json'
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const card = document.querySelector('.card');
    const introText = document.querySelector('.introText');
    const navbarLinks = document.querySelector('.navbar-links');
    const friendPic = document.querySelector('.friendPic');

    console.log('Hamburger Menu:', hamburgerMenu);
    console.log('Overlay:', overlay);

    if (hamburgerMenu && overlay && navbarLinks && card && introText && friendPic) {
        function toggleOverlay() {
            overlay.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');

            // Toggle container visibility
            if (hamburgerMenu.classList.contains('active')) {
                card.classList.add('hide'); // Hide card when hamburger menu is active
                introText.classList.add('hide'); // Hide card when hamburger menu is active
                friendPic.classList.add('hide'); // Hide card when hamburger menu is active
            } else {
                card.classList.remove('hide'); // Show card when hamburger menu is inactive
                introText.classList.remove('hide'); // Show card when hamburger menu is inactive
                friendPic.classList.remove('hide'); // Show card when hamburger menu is inactive
            }

            // Toggle navbar-links visibility
            navbarLinks.classList.toggle('active');
        }

        hamburgerMenu.addEventListener('click', () => {
            toggleOverlay();
        });

    } else {
        console.error('Hamburger menu, overlay, or navbar-links not found');
    }
});
