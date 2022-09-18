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