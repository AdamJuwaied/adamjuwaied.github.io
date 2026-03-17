// https://assets4.lottiefiles.com/temp_editor_files/lf30_editor_h0hsw28y.json weather balloon
// https://assets5.lottiefiles.com/temp_editor_files/lf30_editor_ym8x4yof.json satellite
// https://assets1.lottiefiles.com/packages/lf20_t03tbmqu.json augmented reality
// https://assets5.lottiefiles.com/temp_editor_files/lf30_editor_cbc4pzko.json coding computer


const balloon = bodymovin.loadAnimation({
    container: document.getElementById('balloon'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/weatherBalloon.json'
});

const augmented = bodymovin.loadAnimation({
    container: document.getElementById('augmented'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/AR.json'
});

const coding = bodymovin.loadAnimation({
    container: document.getElementById('coding'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/coding.json'
});

const animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/bm.json'
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const svgload = document.querySelector('.svgload');
    const navbarLinks = document.querySelector('.navbar-links');

    console.log('Hamburger Menu:', hamburgerMenu);
    console.log('Overlay:', overlay);

    if (hamburgerMenu && overlay && navbarLinks) {
        function toggleOverlay() {
            overlay.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');

            // Toggle container visibility
            if (hamburgerMenu.classList.contains('active')) {
                svgload.classList.add('hide');

            } else {
                svgload.classList.remove('hide');

            }

            // Toggle navbar-links visibility
            navbarLinks.classList.toggle('active');
        }

        hamburgerMenu.addEventListener('click', () => {
            toggleOverlay();
        });

    } else {
        console.error('Hamburger menu or overlay not found');
    }
});
