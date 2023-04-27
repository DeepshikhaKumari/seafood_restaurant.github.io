// To scroll the sticky navbar and change the effect

window.onscroll = function () {
    var nav = document.querySelector('nav');
    if (window.scrollY >= 100) {
        nav.classList.add('fixtop');
    } else {
        nav.classList.remove('fixtop');
    }
}

