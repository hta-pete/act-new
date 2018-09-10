$(function(){

    var $window       = $(window),    
        fsImg         = $('.img-fs'),
        startwidth    = 1920, 
        startheight   = 1080,
        ratio         = startheight/startwidth,
        imagewidth,
        imageheight,
        browserwidth,
        browserheight;

    $window.on('resize', function(){ 
                    
        fsImage();  
                        
    });

    function fsImage(){

        var imagewidth    = $(this).width();
        var imageheight   = $(this).height();
        var browserwidth  = $window.width();
        var browserheight = $('.home-hero').height();
     
        if ((browserheight/browserwidth) > ratio){
            fsImg.height(browserheight);
            fsImg.width(browserheight / ratio);
        } else {
            fsImg.width(browserwidth);
            fsImg.height(browserwidth * ratio);
        };
        fsImg.css('left', (browserwidth - fsImg.width())/2);
        fsImg.css('top', (browserheight - fsImg.height())/2);

    };
    fsImage(); 
    

    
    var lastScrollTop = $window.scrollTop();

    function scrollStuff() {

        var scrollTop = $window.scrollTop();
        var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');
        var bottom    = $window.height() + scrollTop == $(document).height();

        if( y == 'down' && scrollTop > 90 ){

            $('header').addClass('hide');

        } else{

            $('header').removeClass('hide');

        }
        lastScrollTop = scrollTop;

    }
    scrollStuff();

    $window.on('scroll', scrollStuff);


    var slideText = $('#home-hero-copy h2');
    var words     = ['respect','integrity','accountability','family','safety'];
    var count     = 0;

    var textSlider = setInterval(function(){

        animateText();

    },5000);

    function animateText(){

        if (count == words.length) {
            count = 0;
        }

        slideText.html(words[count].replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        
        var text = anime.timeline()
          .add({
            targets: '#home-hero-copy h2 .letter',
            translateX: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: function(el, i) {
              return 500 + 30 * i;
            }
          })
          .add({
            targets: '#home-hero-copy h2 .letter',
            translateX: [0,-90],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1200,
            offset: 3500,
            delay: function(el, i) {
              return 100 + 30 * i;
            }
          });
          
        count++;

    }
    animateText();


    // Primary nav sub menu animation
    $('.has-sub-menu--js').on('click', function(){

      var sub_menu = $(this);

      sub_menu.siblings().find('.sub-menu--js').slideUp('fast', function(){

        sub_menu.find('.sub-menu--js').slideToggle('fast');

      });

    });



    //Slick slider
    $('.home-programs-slider').slick({
          infinite:true,
          dots:false,
          slidesToShow:3,
          slidesToScroll:1,
<<<<<<< HEAD
=======
          //centerMode: true,
          autoplay:false,
          //autoplaySpeed: 8000,
>>>>>>> 2a22db0f5f4ff3915bcb5f3139cc62cd6643b0e8
          speed: 500,
          pauseOnHover:false,
          prevArrow: false,
          nextArrow: $('.slider-next-btn')
    });

    $('.home-programs-slider').on('afterChange', resetSlideStuffProgress);

    function resetSlideStuffProgress(){

        var nextBtn     = $('.slider-next-btn'),  
            newNextBtn  = nextBtn.clone(true);
                   
        nextBtn.before(newNextBtn);        
        nextBtn.remove();

    };

    
    $('.flipping-drivers-slide:first-child').addClass('active');

    // Animate video thumb group
    $('.flipping-drivers-slider').on('mousemove', rotateCard);

    function rotateCard(e){

      var offsetLeft = $(this).offset().left;
      var offsetTop  = $(this).offset().top;
      var mouseX     = offsetLeft + $(this).width() / 2;
      var mouseY     = offsetTop + $(this).height() / 2;
      var rotate_X;
      var rotate_Y;
      
      rotate_X = e.pageX - mouseX;
      rotate_Y = e.pageY - mouseY;

<<<<<<< HEAD
      $(this).find('img').css('transform', 'rotateX(' + -rotate_Y*0.02 + 'deg) rotateY(' + rotate_X*0.02 + 'deg) translateY(-15px) translateZ(0)');
      $(this).find('h4').css('transform', 'rotateX(' + -rotate_Y*0.02 + 'deg) rotateY(' + rotate_X*0.02 + 'deg) translateY(-30px) translateZ(40px)');
=======
      $(this).find('img').css('transform', 'rotateX(' + -rotate_Y*0.02 + 'deg) rotateY(' + rotate_X*0.02 + 'deg) translateY(-15px) translateZ(10px)');
      $(this).find('h4').css('transform', 'rotateX(' + -rotate_Y*0.02 + 'deg) rotateY(' + rotate_X*0.02 + 'deg) translateY(-15px) translateZ(40px)');
>>>>>>> 2a22db0f5f4ff3915bcb5f3139cc62cd6643b0e8
    

    }

    $('.flipping-drivers-slider').on('mouseleave', function(){
      
<<<<<<< HEAD
      $(this).find('img').css('transform', 'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) translateY(0) translateZ(0)');
      $(this).find('h4').css('transform', 'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) translateY(0) translateZ(0)');
=======
      $(this).find('img, h4').css('transform', 'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) translateY(0) translateZ(0)');
>>>>>>> 2a22db0f5f4ff3915bcb5f3139cc62cd6643b0e8
      
    });

    


    $('.flipping-drivers-slider-next-btn').on('click', function(){

        $('.flipping-drivers-slide').removeClass('active');



    });


    var driverImages = ['img/james.jpg', 'img/john.jpg'];
    var driverNames  = ['James', 'John'];

    var flipDrivers = function(){

        var current = 1;
        var len     = driverImages.length;

        return function(){
            var direction = 1;
            if (current >= len) current = 0;

            $('.flipping-drivers-slide').removeClass('active');

            setTimeout(function(){

                $('.flipping-drivers-slide img').attr('src', driverImages[current]);
                $('.flipping-drivers-slide h4').text('Meet ' + driverNames[current]);
                $('.flipping-drivers-slide').addClass('active');

                current += direction;

            }, 500);
            

            
        }
    }();

    $('.flipping-drivers-slider-next-btn').on('click', flipDrivers);


    

});







