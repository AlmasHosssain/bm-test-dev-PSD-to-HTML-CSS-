var menuIcon = document.getElementById('menu-icon');
var mobileMenu = document.getElementById('mobile-menu');
var pos = 0;
menuIcon.addEventListener('click', function() {
    if (pos === 0) {
        mobileMenu.style.left = '0';
        pos = 1;
    } else {
        mobileMenu.style.left = '-100%';
        pos = 0;
    }
});