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