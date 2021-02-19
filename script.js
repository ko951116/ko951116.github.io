//-------preloader--------//
window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display="none";
    },600)
})

    
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 200) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
 

    //-------slide-up--------//
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });


    //-------toggle menu/navbar--------//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //-------typing animation--------//
    /* var typed = new Typed(".typing", {
        strings: ["Interactive Design", "Human Computer Interaction", "Creative Techs", "User Experience"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    }); */
    var typed = new Typed(".typing-2", {
        strings: ["Interactive Design", "Human Computer Interaction", "Creative Techs", "User Experience"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });

    /* AOS.init({
        easing: 'ease',
        duration: 900,
        once: true
    }); */

});