// Global:
const responsive_carousel = {
    // for very very small device:
    0: {
        items: 1,
    },
    // here 320 is act as min-width i.e 320px or up then only 1 item will be displayed
    320: {
        items: 1,
    },
    576: {
        items: 2,
    },
    992: {
        items: 3,
    },
};

//-> HamBurger-functioning ->
let navBar = document.querySelector(".nav-bar");
let hamburger = document.querySelector(".toggle-icon>i");

hamburger.onclick = e => {
    navBar.classList.toggle("collapse");
};

//$ owl-carousel for the Blog..
// -> to start call the owl-carousel function().
// -> to do change functionality of the default carousel we use a object with certain default properties and put the object in the carousel start function().
$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    // to use a custom owl-navigation instead of default navigation:
    navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
    ],
    // To make owlCarousel responsive.-> we have a property named: "responsive" which take a object as value in which we specify diff breakpoints and at which breakpoints what will be the appearance of the owl-carousel.
    responsive: responsive_carousel,
});

// Click to scroll top
$(".move-up span i").click(function() {
    $("html,body").animate({
            scrollTop: 0,
        },
        1000
    );
});

// instance of AOS
AOS.init();