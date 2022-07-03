window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});


const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("scroll-active",window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let secctionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");
        
        if(scrollY > secctionTop && scrollY < secctionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    });
});


const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


const navMenuBtn = document.querySelector(".nav-menu-btn");
const navItems = document.querySelector(".nav-items");
const navItemsa = document.querySelectorAll(".nav-items a");

navMenuBtn.addEventListener("click", () => {
    navItems.classList.toggle("nav-items-active");
    if(navItems.classList.contains("nav-items-active")) {
        navMenuBtn.style.background = "url('images/close-btn.png')";
        navMenuBtn.style.backgroundRepeat = "no-repeat";
        navMenuBtn.style.filter = "var(--color-filter)";
        navMenuBtn.style.backgroundSize = "25px";
        navMenuBtn.style.backgroundPosition = "center";
        navMenuBtn.style.width = "40px";
        navMenuBtn.style.height = "40px";
        navMenuBtn.style.cursor = "pointer";
        navMenuBtn.style.display = "block";
    }
    else {
        navMenuBtn.style.background = "url('images/menu-btn.png')";
        navMenuBtn.style.backgroundRepeat = "no-repeat";
        navMenuBtn.style.filter = "var(--color-filter)";
        navMenuBtn.style.backgroundSize = "30px";
        navMenuBtn.style.backgroundPosition = "center";
        navMenuBtn.style.width = "40px";
        navMenuBtn.style.height = "40px";
        navMenuBtn.style.cursor = "pointer";
        navMenuBtn.style.display = "block";
    }
});

navItemsa.forEach((item) => {
    item.addEventListener("click", () => {
        if(window.innerWidth <= 1070) {
            navItems.classList.toggle("nav-items-active");
            if(navItems.classList.contains("nav-items-active")) {
                navMenuBtn.style.background = "url('images/close-btn.png')";
                navMenuBtn.style.backgroundRepeat = "no-repeat";
                navMenuBtn.style.filter = "var(--color-filter)";
                navMenuBtn.style.backgroundSize = "25px";
                navMenuBtn.style.backgroundPosition = "center";
                navMenuBtn.style.width = "40px";
                navMenuBtn.style.height = "40px";
                navMenuBtn.style.cursor = "pointer";
                navMenuBtn.style.display = "block";
            }
            else {
                navMenuBtn.style.background = "url('images/menu-btn.png')";
                navMenuBtn.style.backgroundRepeat = "no-repeat";
                navMenuBtn.style.filter = "var(--color-filter)";
                navMenuBtn.style.backgroundSize = "30px";
                navMenuBtn.style.backgroundPosition = "center";
                navMenuBtn.style.width = "40px";
                navMenuBtn.style.height = "40px";
                navMenuBtn.style.cursor = "pointer";
                navMenuBtn.style.display = "block";
            }
        }
    });
});


ScrollReveal({ 
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2 , .section-title-1 , .section-title-2', {
    delay: 500,
    origin: 'top'
});

ScrollReveal().reveal('.home .info h3 , .home .info p , .about-info .btn , .contact-right', {
    delay: 600,
    origin: 'bottom'
});

ScrollReveal().reveal('.home .info .btn', {
    delay: 700,
    origin: 'bottom'
});

ScrollReveal().reveal('.media-icons i , .contact-left li', {
    delay: 500,
    origin: 'left',
    interval: 200
});

ScrollReveal().reveal('.home-img , .about-img', {
    delay: 500,
    origin: 'bottom'
});

ScrollReveal().reveal('.about .description', {
    delay: 600,
    origin: 'top'
});

ScrollReveal().reveal('.resume-description , .contact-left h2', {
    delay: 700,
    origin: 'top'
});

ScrollReveal().reveal('.profile-card , .education , .projects .img-card', {
    delay: 800,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.copyright', {
    delay: 500,
    origin: 'top',
});