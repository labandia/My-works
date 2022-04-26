/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

const nav = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){
        nav.classList.add('active_nav');
    } else{
        nav.classList.remove('active_nav');
    }
})


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            // document.querySelector('.active_nav.nav__link').classList.add('active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive);



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`.home__data`);
sr.reveal(`.home__imgcontainer`, {delay: 500});
sr.reveal(`.choose__title`);
sr.reveal(`.choose__sub`, {delay: 500});


sr.reveal(`.choose__box, .service__box`, {interval: 100});
sr.reveal(`.details__imgcontainer, .others__content, .first`, {origin: 'left'});
sr.reveal(`.details__content, .others__imgcontainer, .second`, {origin: 'right'});