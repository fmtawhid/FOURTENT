/*********************************************************************************

	Template Name: Keystroke Creative Agency Bootstrap4 Html5 Template
	Note: This is main js.

**********************************************************************************/
(function (window, document, $, undefined) {
    'use strict';
    
    var axilKey = {
        k: function (e) {
			axilKey.s();
			axilKey.methods();
        },
        s: function (e) {
			this._window = $(window),
			this._document = $(document),
			this._body = $('body'),
            this._html = $('html'),
            this.sideNav = $('.side-nav'),
            this._navsearch = $('.axil-search-area')
        },
        
        methods: function (e) {
            axilKey.axilWow();
            axilKey.counterUp();
            axilKey.countDown();
            axilKey.ytPlayer();
            axilKey.splittingText();
            axilKey.tiltAnimation();
            axilKey.axilMasonary();
            axilKey.scrollTop();
            axilKey.axilHover();
            axilKey.axilaccor();
            axilKey.onMoveUp();
            axilKey.moveUp();
            axilKey.marqueImages();
            axilKey.scrollDown();
            axilKey.mouseMOve();
            axilKey.mouseParalax();
            axilKey.stickHeader();
            axilKey.mobileMenu();
            axilKey.scrollSmoth();
            axilKey._slickDoc();
            axilKey._clickDoc();
        },

        axilWow: function () {
            new WOW().init();
        },

        mobileMenu: function () {
            $('.mainmenu-item > li.has-children > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').slideToggle('400');
                $(this).toggleClass('active').siblings('.submenu').toggleClass('is-visiable')
            })
        },
        
        
        stickHeader: function () {
            axilKey._window.scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.axil-header-sticky').addClass('sticky')
                }else{
                    $('.axil-header-sticky').removeClass('sticky')
                }
            })
        },
        
        mouseMOve: function () {
            $.fn.parallax = function (resistance, mouse) {
                var $el;
                $el = $(this);
                TweenLite.to($el, 0.2, {
                    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
                    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
                });
            };
        },

        scrollSmoth: function (e) {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
            });
        },

        mouseParalax: function () {
            $('.paralax-area').mousemove(function (e) {
                $('.paralax--1').parallax(10, e);
                $('.paralax--2').parallax(35, e);
                $('.paralax--3').parallax(15, e);
            });
        },

        moveUp: function () {
            $(window).on('load', function () {
                $('.move-up').css('opacity', 0);
                $('.move-up').waypoint(function () {
                    $('.move-up').addClass('animate');
                }, {
                    offset: '90%'
                });
            })
        },

        marqueImages: function () {
            $('.marque-images').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },


        counterUp: function () {
			var _counter = $('.count');
			if (_counter.length) {
				_counter.counterUp({
					delay: 10,
					time: 1000,
					triggerOnce: true
				});
			}
        },

        ytPlayer: function () {
            $('.play__btn').yu2fvl();
        },

        splittingText: function () {
            if (axilKey._window.width() > 1199) {
                Splitting();
            }
        },

        tiltAnimation: function () {
            var _tiltAnimation = $('.paralax-image')
            if (_tiltAnimation.length) {
                _tiltAnimation.tilt({
                    max: 12,
                    speed: 1e3,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                    transition: !1,
                    perspective: 1e3,
                    scale: 1
                })
            }
        },

        axilMasonary: function () {
            $('.axil-masonary-wrapper').imagesLoaded(function () {
                // filter items on button click
                $('.messonry-button').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                
                // init Isotope
                var $grid = $('.mesonry-list').isotope({
                    itemSelector: '.portfolio',
                    percentPosition: true,
                    transitionDuration: '0.7s',
                    layoutMode: 'fitRows',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1,
                    }
                });
            });
        
            $('.messonry-button button').on('click', function (event) {
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                event.preventDefault();
            });
        },

        countDown: function () {
            $('[data-countdown]').each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<span class="axil-count days"><span class="count-inner"><span class="time-count">%-D</span> <p>Days</p></span></span> <span class="axil-count hour"><span class="count-inner"><span class="time-count">%-H</span> <p>Hours</p></span></span> <span class="axil-count minutes"><span class="count-inner"><span class="time-count">%M</span> <p>Minutes</p></span></span> <span class="axil-count second"><span class="count-inner"><span class="time-count">%S</span> <p>Seconds</p></span></span>'));
                });
            });
        },

        scrollTop: function () {
            $.scrollUp({
                scrollText: '<span class="text">top</span>',
                easingType: 'linear',
                scrollSpeed: 900,
                animation: 'slide'
            });
        },

        onMoveUp: function () {
            axilKey._window.on('load', function () {
                function allAnimation() {
                    $('.move-up').css('opacity', 0);
                    $('.move-up').waypoint(function () {
                        $('.move-up').addClass('animate');
                    }, {
                        offset: '90%'
                    });
                }
                allAnimation();
            })
        },

        axilHover : function () {
            $('.axil-service-area .axil-service , .mesonry-list .portfolio , .blog-list-wrapper .axil-blog, .axil-testimonial-single .axil-testimonial').mouseenter(function() {
                var self=this;
                $(self).removeClass('axil-control');
                setTimeout(function() {
                    $('.axil-service-area .active , .mesonry-list .active , .blog-list-wrapper .active,  .axil-testimonial-single .active').removeClass('active').addClass('axil-control');
                    $(self).removeClass('axil-control').addClass('active');
                    $('.axil-service.active .inner::before').css('opacity',0.1);
                }, 0);
                
            });
        },

        scrollDown: function () {
            $('.smoth-animation').click(function() {
                $('html, body').animate({
                    // scrollTop: $("#sectionBottom").offset().top
                }, 1000);
            });
        },

        axilaccor: function () {
            $('.axil-accordion .card .card-header').siblings('.collapse.show').parent().addClass('open');
        },
        
        _slickDoc: function (e) {
            // Check if element exists
            $.fn.elExists = function () {
                return this.length > 0;
            };
            // Variables
            var $html = $('html'),
                $elementCarousel = $('.axil-carousel');
    
            if ($elementCarousel.elExists()) {
                var slickInstances = [];
                $elementCarousel.each(function (index, element) {
                    var $this = $(this);
                    // Carousel Options
                    var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
                    var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                        $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                        $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                        $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                        $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                        $vertical = $options.vertical ? $options.vertical : false,
                        $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                        $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                        $fade = $options.fade ? $options.fade : false,
                        $autoplay = $options.autoplay ? $options.autoplay : false,
                        $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                        $swipe = $options.swipe ? $options.swipe : false,
                        $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,
    
                        $arrows = $options.arrows ? $options.arrows : false,
                        $dots = $options.dots ? $options.dots : false,
                        $infinite = $options.infinite ? $options.infinite : false,
                        $centerMode = $options.centerMode ? $options.centerMode : false,
                        $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                        $speed = $options.speed ? parseInt($options.speed) : 1000,
                        $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                        $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                        $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                        $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;
    
                    /*Responsive Variable, Array & Loops*/
                    var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                        $responsiveSettingLength = $responsiveSetting.length,
                        $responsiveArray = [];
                    for (var i = 0; i < $responsiveSettingLength; i++) {
                        $responsiveArray[i] = $responsiveSetting[i];
    
                    }
    
                    // Adding Class to instances
                    $this.addClass('slick-carousel-' + index);
                    $this.parent().find('.slick-dots').addClass('dots-' + index);
                    $this.parent().find('.slick-btn').addClass('btn-' + index);
    
                    if ($spaceBetween != 0) {
                        $this.addClass('slick-gutter-' + $spaceBetween);
                    }
                    if ($spaceBetween_xl != 0) {
                        $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
                    }
                    $this.slick({
                        slidesToShow: $slidesToShow,
                        slidesToScroll: $slidesToScroll,
                        asNavFor: $asNavFor,
                        autoplay: $autoplay,
                        autoplaySpeed: $autoplaySpeed,
                        speed: $speed,
                        infinite: $infinite,
                        arrows: $arrows,
                        dots: $dots,
                        vertical: $vertical,
                        focusOnSelect: $focusOnSelect,
                        centerMode: $centerMode,
                        centerPadding: $centerPadding,
                        fade: $fade,
                        adaptiveHeight: $adaptiveHeight,
                        prevArrow: $prevArrow,
                        nextArrow: $nextArrow,
                        responsive: $responsiveArray,
                    });
    
                    if ($isCustomArrow === true) {
                        $($customPrev).on('click', function () {
                            $this.slick('slickPrev');
                        });
                        $($customNext).on('click', function () {
                            $this.slick('slickNext');
                        });
                    }
                });
    
                // Updating the sliders in tab
                $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    $elementCarousel.slick('setPosition');
                });
            }
        },
        
        _clickDoc: function (e) {
            var inputblur, inputFocus, openSideNav, closeSideNav, openSubMenu , closeSubMenu, searchTriggerShow , searchTriggerHide, axilaccordion, OpenMobileMenu, closeMobileMenu, closeMenuWrapperClick, closeMobileMenu2;
            
            inputblur = function (e) {
				if (!$(this).val()) {
					$(this).parent('.form-group').removeClass('focused');
				}
            };

            inputFocus = function (e) {
				$(this).parents('.form-group').addClass('focused');
            };

            openSideNav = function (e) {
                e.preventDefault();
                axilKey.sideNav.addClass('opened');
                axilKey._html.addClass('side-nav-opened');
            };

            closeSideNav = function (e) {
				if (!$('.side-nav, .side-nav *:not(".close-sidenav, .close-sidenav *")').is(e.target)) {
					axilKey.sideNav.removeClass('opened');
                    axilKey._html.removeClass('side-nav-opened');
                }
            };

            OpenMobileMenu = function (e) {
                e.preventDefault();
                axilKey._body.addClass('popup-mobile-manu-visible');
                axilKey._html.css({
                    overflow: 'hidden'
                })
            };

            closeMenuWrapperClick = function (e) {
                e.target === this && axilKey._body.removeClass('popup-mobile-manu-visible'),
                axilKey._html.css({
                    overflow: ''
                });
            };

            closeMobileMenu = function (e) {
                $('.mainmenu-item > li.has-children > a').removeClass('active').siblings('.submenu').slideUp('400')
                axilKey._body.removeClass('popup-mobile-manu-visible');
                axilKey._html.css({
                    overflow: ''
                })
            };

            openSubMenu = function (e) {
                if (axilKey._window.width() < 992) {
                    $(this).siblings('.axil-submenu').slideToggle('active').parents('li').toggleClass('active')
                }else {
                    $(this).siblings('.axil-submenu').toggleClass('visible').parents('li').toggleClass('active');
                    $(this).parents('li').siblings('.has-dropdown').removeClass('active').find('.axil-submenu').removeClass('visible')
                }
            };

            closeSubMenu = function (e) {
                if (!$('.mainmenu-nav ul.mainmenu li a').is(e.target)) {
                    $('.axil-submenu').removeClass('visible').parents('li').removeClass('active')
                }
            };

            searchTriggerShow = function (e) {
                e.preventDefault();
                axilKey._navsearch.addClass('visible')
            };

            searchTriggerHide = function (e) {
                e.preventDefault();
                axilKey._navsearch.removeClass('visible')
            };
            
            axilaccordion = function (e) {
                e.preventDefault();
                $(this).siblings('.collapse.show').parent().removeClass('open').toggleClass('active');
            }

            axilKey._document
                .on('blur', 'input,textarea,select', inputblur)
                .on('focus', 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', inputFocus)
                .on('click', '#side-nav-toggler', openSideNav)
                .on('click', '#close-sidenav , .side-nav-opened', closeSideNav)
                // .on('click', '.mainmenu-nav ul.mainmenu li a', openSubMenu )
                // .on('click' , closeSubMenu)
                .on('click' , '.search-trigger' , searchTriggerShow)
                .on('click' , '.axil-search-area .navbar-search-close' , searchTriggerHide)
                .on('click' , '.axil-accordion .card .card-header' , axilaccordion)
                .on('click' , '.popup-navigation-activation' , OpenMobileMenu)
                .on('click' , '.close-menu' , closeMobileMenu)
                .on('click' , '.popup-mobile-manu' , closeMenuWrapperClick)
        }
    };

    axilKey.k();

})(window, document, jQuery);