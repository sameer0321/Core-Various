document.body.style.overflow = 'hidden';

// Hide preloader after 4 seconds and initialize AOS
setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.style.overflow = 'auto'; // Enable scrolling after 4 seconds

    // Initialize AOS after the preloader is hidden
    AOS.init({
        once: true,
        duration: 2500,
        disable: 'mobile',
    });
}, 4000); // 4000 milliseconds = 4 seconds

let topButton = document.getElementsByClassName("backToTop")[0];
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
});

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let mobileView = document.querySelector(".mobileview");
let menuBtn = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelectorAll(".navlinks");
let arrow1 = document.querySelector(".arrow_1");
let arrow2 = document.querySelector(".arrow_2");
let arrow3 = document.querySelector(".arrow_3");

menuBtn.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    arrow1.classList.toggle("rotate1");
    arrow2.classList.toggle("rotate2");
    arrow3.classList.toggle("rotate3");
})

navlinks.forEach(link => {
    link.addEventListener("click", function () {
        mobileView.classList.toggle("show");
        body.classList.remove("overflow-hidden");
        arrow1.classList.toggle("rotate1");
        arrow2.classList.toggle("rotate2");
        arrow3.classList.toggle("rotate3");
    })
});
