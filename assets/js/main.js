/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        console.log("click");
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const main = document.getElementById('main')

const contact = document.getElementById('contact'),
      contactClose = document.getElementById('contact-close'),
      contactObject = document.getElementById('contact-object'),
      contactEmail = document.getElementById('contact-eamil')
      contactButton = document.getElementById('contact-button')

contactClose.addEventListener('click', () => {
    contact.style.visibility = "hidden"
    main.style.overflow = "visible"
})

contactButton.addEventListener('click', () => {
    alert("Merci pour votre retour. votre demande sera traitée dans les plus brefs délais.")
    contact.style.visibility = "hidden"
})

function displayContact() {
    contact.style.visibility = "visible"
    main.style.overflow = "hidden"
}

let templateParams = {
    mail: '',
    drawing: ''
};
 
emailjs.send('service_nb02qyh', 'template_viqyk2d', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
});































