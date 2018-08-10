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
        var browserwidth  = $('#main').width();
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
          /*
          var underline = anime.timeline()
            .add({
                targets: '#home-hero-copy .underline',
                translateX: [800,0],
                opacity: [0,1],
                width: '120%',
                easing: "easeOutExpo",
                duration: 1000,
                offset: 500,
            })
            .add({
                targets: '#home-hero-copy .underline',
                translateX: [0,-800],
                width: '0',
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 600,
                offset: 4400,
          });
          */
          

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
    $('.programs-slider').slick({
          infinite:true,
          dots:false,
          slidesToShow:3,
          slidesToScroll:1,
          //centerMode: true,
          autoplay:true,
          autoplaySpeed: 6000,
          speed: 500,
          pauseOnHover:false,
          prevArrow: false,
          nextArrow: $('.slider-next-btn')
    });

    $('.programs-slider').on('afterChange', resetSlideStuffProgress);

    function resetSlideStuffProgress(){

        var nextBtn     = $('.slider-next-btn'),  
            newNextBtn  = nextBtn.clone(true);
                   
        nextBtn.before(newNextBtn);        
        nextBtn.remove();

    };
    

});







