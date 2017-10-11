(function($){
    "use strict";

    var app = (function() {
        $('.banner-hero').slick({
            slidesToShow: 1,
            speed: 1000,
            autoplaySpeed: 7000,
            autoplay: true,
            dots: true
        });

        $('a.humBtn').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('humBtnTrigger');
            if($(this).hasClass('humBtnTrigger')) {
                $('nav.navigasi').animate({height: '310px'}, 300);
            } else {
                $('nav.navigasi').animate({height: '20px'}, 300);
            }
        });

        $('nav.navigasi ul li a').click(function(ev) {
            ev.preventDefault();
            var href = $(this).attr('href');
            $('body, html').stop().animate({
                scrollTop: ($(href) == "#homepage") ? $(href).offset().top + 10 : $(href).offset().top - 79
            }, 1000);
            return false;
        });

        $(window).on('scroll', function() {
            var $scrollPos = $(this).scrollTop(),
                $wwd = $('.what-we-do'),
                $cu = $('.contactUs'),
                $fig = $wwd.find('figure'),
                $Img = $fig.find('img'),
                $cuFig = $cu.find('figure'),
                $cuImg = $cuFig.find('img'),
                img1 = $Img.offset(),
                img2 = $cuImg.offset(),
                $wwCap = $('section.wwdCaption'),
                $wwDC = $('section.wwdContent'),
                $findLi = $wwDC.find('li');

                if($scrollPos > 10) {
                    $Img.eq(0).css({ top: ($scrollPos)/4 +'px' });
                    $Img.eq(2).css({top: ($scrollPos)/4 +'px' });
                    $Img.eq(4).css({ left: ($scrollPos)/10 +'px' });

                    $cuImg.eq(0).css({ top: ($scrollPos)/4 +'px' });
                    $cuImg.eq(2).css({top: ($scrollPos)/4 +'px' });
                    $cuImg.eq(4).css({ left: ($scrollPos)/10 +'px' });
                }

                if($scrollPos > 50) {
                    $('header.site-header').addClass('onHeadScroll');
                } else {
                    $('header.site-header').removeClass('onHeadScroll');
                }

                if($scrollPos > 80) {
                    $Img.eq(1).css({ top: ($scrollPos)/8 +'px' });
                    $Img.eq(3).css({ top: ($scrollPos)/8 +'px' });
                    $Img.eq(5).css({ left: ($scrollPos)/12+'px' });

                    $cuImg.eq(1).css({ top: ($scrollPos)/8 +'px' });
                    $cuImg.eq(3).css({ top: ($scrollPos)/9 +'px' });
                    $cuImg.eq(5).css({ left: ($scrollPos)/12+'px' });

                }

                $('ul.right-grid-img li').each(function(n) {
                  $('ul.right-grid-img li').eq(n+1).css('visible', 'hidden');
                });

                if($scrollPos > $wwDC.offset().top - $wwCap.offset().top) {
                    $wwCap.find('h1').css('visibility', 'visible').addClass('animated zoomIn');
                    $wwCap.find('p').css('visibility', 'visible').addClass('animated zoomIn');
                    $findLi.each(function(idList){
                        setTimeout(function() {
                            $findLi.eq(idList).children('span').css('visibility', 'visible').addClass('animated bounceInDown');
                        }, 400 * (idList+1));
                        setTimeout(function() {
                            $wwDC.find('.wwCLeft').css('visibility', 'visible').addClass('animated fadeInLeft');
                            $wwDC.find('.wwCRight').css('visibility', 'visible').addClass('animated fadeInRight');
                        });
                    });
                }

                if($scrollPos > $('div.news-update').offset().top - 400) {
                  $('div.testi').css('visibility', 'visible').addClass('animated slideInLeft');
                  $('div.left-top-grid-img').css('visibility', 'visible').addClass('animated slideInDown');
                  $('div.left-bottom-grid-img').css('visibility', 'visible').addClass('animated slideInUp');
                  $('ul.right-grid-img li').each(function(idxList) {
                    setTimeout(function() {
                      $('ul.right-grid-img li').children('img').eq(idxList).css('display', 'block').addClass('animated slideInRight');
                    }, 800 * (idxList+1));
                  });
                }
        });

    })();

})(jQuery);
