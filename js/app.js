$(function(){

    /*Слайдер ___ */
    $('.slider__main').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        pauseOnDotsHover:false
    });
});

/* JS scroll-top */
const offset = 200;
const scrollUp = document.querySelector('.scroll-top');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
};

// onScrole
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-top--show')
    } else {
        scrollUp.classList.remove('scroll-top--show')
    }
});

// click
/*scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});*/

/*
= END JS scroll-top = sidenav__chevron
*/

/* JS sidenav */
const body = document.querySelector('body');
const sidebar = body.querySelector('aside');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search__box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";

    }
});

/*
= END JS sidenav =
*/

/* JS mail modal */
const modalCall = $("[data-modal]");
const modalClose1 = $("[data-close1]");
const modalClose2 = $("[data-close2]");
const modalCreation = $(".modalcreation");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('visible');
    $("body").addClass('no-scroll');
});

modalClose1.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.menu');

    setTimeout(function() {
        modalParent.removeClass('visible');
    }, 200);
});

modalClose2.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modalcreation');

    setTimeout(function() {
        modalParent.removeClass('visible');
        $("body").removeClass('no-scroll');
    }, 200);
});


modalCreation.on("click", function(event) {
    let $this = $(this);

    setTimeout(function() {
        $this.removeClass('visible');
        $("body").removeClass('no-scroll');
    }, 200);
});

$(".modal-body").on("click", function(event) {
    event.stopPropagation();
});

/*
= END JS mail modal =
*/
