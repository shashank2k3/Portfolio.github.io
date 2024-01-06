$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }

          
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
            "Student"
        ],
        typeSpeed: 0,
        backSpeed: 0,
        loop: false
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Student"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

   
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 

});




