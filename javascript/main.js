let changeHeaderBg = () => {
    let header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("change-bg");
    }else {
        header.classList.remove("change-bg");
    }
};
window.addEventListener("scroll", changeHeaderBg);


let toggleMenu = document.querySelector(".toggle-menu");
let closeMenu = document.querySelector(".close");
let navList = document.querySelector(".nav-list");
function menu() {
    toggleMenu.addEventListener("click", () => {
        navList.classList.toggle("show-menu");
        window.onscroll = function() {
            navList.classList.remove("show-menu");
        }
    });
    closeMenu.addEventListener("click", () => {
        navList.classList.remove("show-menu");
    })
}
window.addEventListener("scroll", menu());



let navLinks = document.querySelectorAll(".nav-list li a");
navLinks.forEach (link => {
    link.addEventListener("click", (e) => {
        navLinks.forEach(link => {
            link.classList.remove("active");
        })
        e.target.classList.add("active");
    });
});


function sections(elements) {
    elements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView();
        })
    })
}
sections(navLinks);

let scrollUp = () => {
    let scrollup = document.querySelector(".scrollup");
    if(window.scrollY >= 350) {
        scrollup.classList.add("show-scroll")
    }else {
        scrollup.classList.remove("show-scroll")
    }
    scrollup.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
        })
    })
};
window.addEventListener("scroll", scrollUp);