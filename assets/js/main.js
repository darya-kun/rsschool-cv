/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    };
}
showMenu('nav-toggle', 'nav-menu');


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    const navMenu = document.getElementById('nav-menu');
    // The show-menu class removes after each nav__link was clicked on
    navMenu.classList.remove('show-menu');
};
navLink.forEach(link => link.addEventListener('click', linkAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navMenuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navMenuLink.classList.add('active-link');
        } else {
            navMenuLink.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 300 viewport height, add the show-scroll class
    if(this.scrollY >= 300) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);