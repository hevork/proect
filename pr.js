const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;

            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);

}

/* слайдер */
$(document).ready(function() {
    $(".slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 2000,
        easing: 'ease',
        infinite: true,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {
            breakpoint: 900,
            settings: {
                slidesToShow:2,
                slidesToScroll: 1,
            }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }     
             ]
    });
});

$(document).ready(function(){
    $('.content_toggle').click(function(){
        $('.content_block').slideToggle(300);      
        return false;
    });
});


 
 $(function() {
  
 $(window).scroll(function() {
  
 if($(this).scrollTop() != 0) {
  
 $('#toTop').fadeIn();
  
 } else {
  
 $('#toTop').fadeOut();
  
 }
  
 });
  
 $('#toTop').click(function() {
  
 $('body,html').animate({scrollTop:0},800);
  
 });
  
 });

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.meny').toggleClass('active');
        $('body').toggleClass('lock');

    });
});

