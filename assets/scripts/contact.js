document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.container');


    console.log('Hamburger Menu:', hamburgerMenu);
    console.log('Overlay:', overlay);
    console.log('Container:', container);

    if (hamburgerMenu && overlay && container) {
        function toggleOverlay() {
            overlay.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');

            // Toggle container visibility
            if (hamburgerMenu.classList.contains('active')) {
                container.classList.add('hide');
            } else {
                container.classList.remove('hide');
            }

            // Toggle navbar-links visibility
            navbarLinks.classList.toggle('active');
        }

        hamburgerMenu.addEventListener('click', () => {
            toggleOverlay();
        });

    } else {
        console.error('Hamburger menu, overlay, container, or navbar-links not found');
    }
});