const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener("mousemove", function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.children[0].style.transform = "translate(" + x * 0.2 + "px, " + y * 0.3 + "px)";
    });
})

btns.forEach((btn) => {
    btn.addEventListener("mouseout", function(e) {
        btn.children[0].style.transform = "translate(0px, 0px)";
    });
})


try {
    const animation = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets2.lottiefiles.com/temp_editor_files/lf30_editor_l0xh1ey6.json'
    });
} catch (e) {
    if ( e instanceof CustomExceptionError ) {
        console.log(e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.container');
    const chatBtn = document.querySelector('.chat-btn');
    const navbarLinks = document.querySelector('.navbar-links');

    console.log('Hamburger Menu:', hamburgerMenu);
    console.log('Overlay:', overlay);
    console.log('Container:', container);

    if (hamburgerMenu && overlay && container && navbarLinks && chatBtn) {
        function toggleOverlay() {
            overlay.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');

            // Toggle container visibility
            if (hamburgerMenu.classList.contains('active')) {
                container.classList.add('hide');
                chatBtn.classList.toggle('hide');

            } else {
                container.classList.remove('hide');
                chatBtn.classList.toggle('hide');

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
