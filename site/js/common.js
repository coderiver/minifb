$(document).ready(function() {
	
	$(document).on("click", function(){
		// $('.js-open-mc').removeClass('is-active');
		// $('.js-match-center').removeClass('is-active');
		// $('.js-menu-link').removeClass('is-active');
		// $('.js-menu').removeClass('is-active');
		// $('.js-menu-block').removeClass('is-active');
		// $('.js-dropdown').slideUp('fast');
		// $('.js-dropdown-btn').removeClass('is-active');
		// if(($(document).scrollTop() > navTop && $('.js-match-center').hasClass('is-active'))) {
		// 	$('.js-match-center').removeClass('is-active');
		// 	$('.js-open-mc').removeClass('is-active');
		// 	return;
		// }
		// console.log('');
		// setFixedHeight();
		
	});
	// function scrollFixedElements() {
	// 	 var scroll_left = $(this).scrollLeft();
	// 	 $(".fixed-element").css({
	// 		 left: -scroll_left
	// 	 });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	// 	 scrollFixedElements()
	// });

	
	//match-center

	function matchSlides() {
		if ($(window).width() > 767) {
			$('.js-match-slides').css('min-height', $('.js-match-slides.match-gols').outerHeight());
		}
		else {
			$('.js-match-slides').css('min-height', '100px');
		}
		
	}

	$('.js-match-slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		adaptiveHeight: true,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					swipe: false
				}
		    },
		  ]
	});

	

	$('.js-match-tab').click(function() {
		$('.js-match-tab').removeClass('is-active');
		$(this).addClass('is-active');

		var index = $(this).data('index');

		$('.js-match-slider').slick('goTo', index);

		return false;
	});

	$('.js-match-slider').each(function() {
		$(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$('.js-match-tab')
				.removeClass('is-active')
				.filter('[data-index="' + nextSlide + '"]')
				.addClass('is-active');
		});
	});

	$(window).resize(function() {
		matchSlides();

		var current = $('.js-match-slides.slick-active').data('slick-index');

		$('.js-match-tab').removeClass('is-active');

		$('.js-match-tab').eq($('.js-match-slides.slick-active').index() + 1).addClass('is-active');
	});
	$(window).load(function() {
		matchSlides();
	});

	$('.js-header-sponsors').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: false,
		swipe: false
	});
	$('.js-menu').on('click', function(e) {
		e.stopPropagation();
	});
	$('.js-dropdown-btn').click(function() {
		$('.js-open-mc').removeClass('is-active');
		$('.js-match-center').removeClass('is-active');
		$('.js-dropdown').slideToggle('fast');
		$(this).toggleClass('is-active');
		$('.js-mc').removeClass('is-active');
		$('.js-menu').removeClass('is-active');
		$('.js-mobile').removeClass('is-active');
		$('.js-menu-link').removeClass('is-active');
		$('.js-mc-btn').removeClass('is-active');
		setPos();
		if ($(window).width() > 767) {setFixedHeight()}
		return false;
	});
	$('.js-dropdown').on('click', function(e) {
		e.stopPropagation();
	});
	//select
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});
		
	// select list
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}

	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;
		
	});
	$('select').on('change', function () {
		var val = $(this).find('option:selected').val();
		if($(window).width() < 768) {
			$(this).siblings(".js-select-text").text(val);
		}
	});

// ----------------------------
	var fixedHeight = 0,
		navTop = $('.js-menu-wrap').offset().top;

	setTimeout(function() {
		// setFixedHeight();
		navTop = $('.js-menu-wrap').offset().top;
	}, 300)
	function setPos(){
		// setFixedHeight();
		navTop = $('.js-menu-wrap').offset().top;
	};
	setPos();

	function setFixedHeight() {
		if(fixedHeight == $('.js-menu-inner').outerHeight()) return;

		fixedHeight = $('.js-menu-inner').outerHeight();
		$('.js-menu-wrap').css('min-height', fixedHeight);
		// console.log('min-heigh: '+ fixedHeight);
	}

	//fixed header
	function fixHead(){

		function scrollMenu() {
			if ($(window).width() > 767) {
				if ($(window).scrollTop() >= navTop) {
					setFixedHeight();
					$('.js-menu-fixed').addClass('is-fixed');
				}
				else {
					$('.js-menu-fixed').removeClass('is-fixed');
				};
			}
			else {
				$('.js-menu-wrap').css('min-height', 1);
				$('.js-menu-fixed').removeClass('is-fixed');
			};
		}
		// open mc
		$('.js-open-mc').on('click', function(e) {
			// fixedHeight = 0;
			$('.js-menu-link').removeClass('is-active');
			$('.js-menu').removeClass('is-active');
			$('.js-mobile').removeClass('is-active');
			$('.js-menu-block').removeClass('is-active');
			$('.js-dropdown').slideUp('fast');
			$('.js-dropdown-btn').removeClass('is-active');

			if($(document).scrollTop() < navTop) {
				$('.js-match-center').toggleClass('is-active');
				$(this).toggleClass('is-active');
				if ($(window).width() > 767) {setFixedHeight()}
				
			}
			else if($(document).scrollTop() > navTop && $('.js-match-center').hasClass('is-active')) {
				// fixedHeight = 1;
				$('.js-match-center').toggleClass('is-active');
				$(this).toggleClass('is-active');
				if ($(window).width() > 767) {setFixedHeight()}
			}
			else {

				$('body').animate({
					scrollTop: 0
				}, 300);
				$(this).toggleClass('is-active');

				setTimeout(function() {
					$('.js-match-center').toggleClass('is-active');
					setFixedHeight();
				},400);
				
			}

			e.stopPropagation();
			
		});

		$(window).scroll(function() {
			scrollMenu();
		});
		$(window).on('load', function() {
			scrollMenu();
		});
		$(window).resize(function() {
			scrollMenu();
		});
		// menu
		$('.js-menu-link').on('click', function(e) {
			$('.js-open-mc').removeClass('is-active');
			$('.js-match-center').removeClass('is-active');
			$('.js-mobile').removeClass('is-active');

			var btn = $(this).data('mlink'),
				btns = $('.js-menu-link'),
				items = $('.js-menu-block'),
				currItem = $('.js-menu-block[data-mblock=' + btn + ']'),
				menu = $('.js-menu').addClass('is-active');

			$('.js-dropdown').slideUp('fast');
			$('.js-dropdown-btn').removeClass('is-active');
			$('.js-mc').removeClass('is-active');
			$('.js-mc-btn').removeClass('is-active');

			if ($(this).hasClass('is-active')) {
				btns.removeClass('is-active');
				menu.removeClass('is-active');
				items.removeClass('is-active');
				fixedHeight = 1;
			}
			else {
				btns.removeClass('is-active');
				$('.js-menu-link[data-mlink="' + btn + '"]').addClass('is-active');
				menu.addClass('is-active');
				items.removeClass('is-active');
				currItem.addClass('is-active');

			}
			if(($(document).scrollTop() < navTop)) {
				if ($(window).width() > 767) {setFixedHeight()}
			}
			return false;
		});	
		$('.js-accord-title').click(function() {
			var $accord 	= $(this).parents('.js-accord'),
				$accordBody = $accord.find('.js-accord-body');
			$(this).toggleClass('is-active');
			$accordBody.stop().toggle();
			if($(this).parents('.js-mc') && $(window).width() > 767) setFixedHeight(); return false;
			return false;
		});
	};
	fixHead();
//--------------------------------

	//match centre
	$('.js-mc-btn').on('click', function() {
		$('.js-mc').toggleClass('is-active');
		$(this).toggleClass('is-active');
		$('.js-dropdown').slideUp('fast');
		$('.js-dropdown-btn').removeClass('is-active');
		$('.js-menu').removeClass('is-active');
		$('.js-mobile').removeClass('is-active');
		$('.js-menu-link').removeClass('is-active');
		if ($(window).scrollTop() > $('.header__top').outerHeight()) {
			$("html, body").animate({
					scrollTop: $('.js-mc').offset().top
			}, '500', 'swing');
		};
		return false;
	});
	$('.js-mc').each(function() {
		$('.js-mc-close').on('click', function() {
			$('.js-mc').removeClass('is-active');
			$('.js-mc-btn').removeClass('is-active');
		});
		$('body').on('click', function() {
			$('.js-mc').removeClass('is-active');
			$('.js-mc-btn').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			return false;
		});
	});

	//mobile
	$('.js-mobile-btn').click(function() {
		$('.js-mobile').toggleClass('is-active');

		$('.js-dropdown').slideUp('fast');
		$('.js-dropdown-btn').removeClass('is-active');
		$('.js-mc').removeClass('is-active');
		$('.js-mc-btn').removeClass('is-active');

		if (!$('.js-mobile').hasClass('is-active')) {
			if ($('.js-menu-link').hasClass('is-active')) {
				$('.js-menu').removeClass('is-active');		
				$('.js-menu-block').removeClass('is-active');		
				$('.js-menu-link').removeClass('is-active');		
				$('.js-mobile').removeClass('is-active');				
			};
			$('.js-menu').removeClass('is-active');
		}
		else {
			$('.js-menu').addClass('is-active');
		}
	});

	//footer
	$('.js-footer-open').click(function() {
		$(this).parent().find('.js-footer-list').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});

	//accordion
	$('.js-accordion').each(function() {
		
		$('.js-accordion-title').click(function() {
			if ($(this).parents('.js-accordion').hasClass('is-active')) {
			}
			else {
				$('.js-accordion').removeClass('is-active');
				$('.js-accordion-body').hide();
				$(this).parents('.js-accordion').addClass('is-active');
				$(this).parents('.js-accordion').find('.js-accordion-body').show();				
			};
			return false;
		});

	});

	//tabs


	$('.js-tabs-link').on('click', function() {


		var btn = $(this).data('btn'),
			btns = $(this).parents('.js-tabs').find('.js-tabs-link'),
			items = $(this).parents('.js-tabs').find('.js-tabs-block'),
			currItem = $(this).parents('.js-tabs').find('.js-tabs-block[data-block=' + btn + ']');

		btns.removeClass('is-active');
		$(this).parents('.js-tabs').find('.js-tabs-link[data-btn=' + btn + ']').addClass('is-active');
		items.removeClass('is-active');
		currItem.addClass('is-active');

		if ($(this).hasClass('mobile-tab-btn')) {
			var thisBtn = $(this);

			if ($(window).scrollTop() > thisBtn.offset().top) {
				$("html, body").animate({
						scrollTop: thisBtn.offset().top
				}, '500', 'swing');
			};

			if ($(this).hasClass('is-mobile')) {
				btns.removeClass('is-mobile');		
				$(this).parents('.js-tabs').find('.js-tabs-block[data-block=' + btn + ']').removeClass('is-mobile');	
			}
			else {
				btns.removeClass('is-mobile');	
				items.removeClass('is-mobile');
				$(this).addClass('is-mobile');	
				$(this).parents('.js-tabs').find('.js-tabs-block[data-block=' + btn + ']').addClass('is-mobile');
			};
		}
		else {
			items.removeClass('is-mobile');
		}
		if($(this).parents('.js-mc') && $(window).width() > 767) setFixedHeight(); return false;
		return false;
	});	
	//index (news/photos) / video slider

	function adaptiveSliders() {
		if ($(window).width() < 767) {
			if (!$('.js-block-slider').hasClass('slick-initialized')) {
				$('.js-block-slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				});
			};
			
		}
		else {
			if ($('.js-block-slider').hasClass('slick-initialized')) {
				$('.js-block-slider').slick('unslick');
			};			
		};

		if ($(window).width() < 991) {
			if (!$('.js-video-slider, .js-org-slider').hasClass('slick-initialized')) {
				$('.js-video-slider, .js-org-slider').slick({
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			};
			
		}
		else {
			if ($('.js-video-slider, .js-org-slider').hasClass('slick-initialized')) {
				$('.js-video-slider, .js-org-slider').slick('unslick');
			};			
		};

		if ($(window).width() < 761) {
			if (!$('.js-photo-slider').hasClass('slick-initialized')) {
				$('.js-photo-slider').slick({
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						}
					]
				});
			};
			
		}
		else {
			if ($('.js-photo-slider').hasClass('slick-initialized')) {
				$('.js-photo-slider').slick('unslick');
			};			
		};
	}
	$('.js-players-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: $('.js-players-slider-next'),
		prevArrow: $('.js-players-slider-prev'),
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1
				}
			}
		]

	});
	$(window).resize(function() {
		adaptiveSliders();		
	});

	$(window).load(function() {
		adaptiveSliders();
	});

	//fancy

	$(".js-fancybox-video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$(".js-fancybox").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$('.js-champ-item').click(function() {
		if ($(this).hasClass('is-active')) {
			$(this).parents('.js-champ').find('.js-champ-item').removeClass('is-active');
		}
		else {
			$(this).parents('.js-champ').find('.js-champ-item').removeClass('is-active');
			$(this).addClass('is-active')			
		};
		if ($(this).parents('.js-champ').find('.js-champ-item').hasClass('is-active')) {
			$(this).parents('.js-champ').find('.js-champ-btn').removeAttr('disabled');
		}
		else {
			$(this).parents('.js-champ').find('.js-champ-btn').attr('disabled', 'disabled');
		}
		return false;
	});


	$('.js-leagues-list').menuFlex();

	$('.js-leagues-open').click(function() {
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$(this).siblings('.js-leagues-drop').slideUp('fast');
		}
		else {
			$('.js-leagues-drop').slideUp('fast');
			$('.js-leagues-open').removeClass('is-open');
			$(this).addClass('is-open');
			$(this).siblings('.js-leagues-drop').slideDown('fast');
		}
		return false;
	});

	$('.js-leagues-drop').each(function() {
		$('body').click(function() {
			$('.js-leagues-drop').slideUp('fast');
			$('.js-leagues-open').removeClass('is-open');
		});
		$(this).click(function(event) {
			event.stopPropagation();
		});
		$('.menuFlexBtn').click(function() {
			$('.js-leagues-drop').slideUp('fast');
			$('.js-leagues-open').removeClass('is-open');
		});
	});

	//search
	$('.js-search').each(function() {
		$('.js-search-btn').click(function() {
			$('.js-search').toggleClass('is-active');
			return false;
		});
		$('body').click(function() {
			$('.js-search').removeClass('is-active');			
		});
		$(this).click(function(event) {
			event.stopPropagation();
		});
	});

	//museum

	// $('.js-museum-for').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.js-museum-nav'
	// });
	$('.js-museum-nav').slick({
		slidesToShow: 11,
		slidesToScroll: 1,
		dots: false,
		centerMode: true,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0',
		infinite: false
	});

	$('.museum-season').click(function() {

		var el = $(this).data('slick-index');

		// console.log(el, $('.museum-season').length - $('.js-museum-nav').find('.slick-cloned').length);

		if (el == $('.museum-season').length - $('.js-museum-nav').find('.slick-cloned').length) {
			$('.js-museum-for').mCustomScrollbar('scrollTo', 'left', {
				scrollInertia: 1000,
				callbacks: false,
			});
		}
		else {
			var sectionLeft = $('.js-museum-section').eq(el).position().left;
			$('.js-museum-for').mCustomScrollbar('scrollTo', sectionLeft, {
				scrollInertia: 1000,
				callbacks: false,
			});
		}
	});

	$('.js-museum-select-list').each(function() {
		
		var btns = $('.js-museum-btn');

		$(this).on('change', function() {

			var btn = $(this).val();

			$(this).parents('.js-museum-select').find('.js-museum-select-text').text($(this).find('option:selected').text())

			if ($(this).hasClass('js-mob-filter')) {
				btns.removeClass('is-active');
				$('.js-museum-btn[data-index=' + btn + ']').addClass('is-active');
				$('.js-museum-btn[data-index=' + btn + ']').trigger('click')
			};
			if ($(this).hasClass('js-season')) {
				var sectionLeft = $('.js-museum-section').eq(btn).position().left;
				$('.js-museum-for').mCustomScrollbar('scrollTo', sectionLeft, {
					scrollInertia: 1000,
					callbacks: false,
				});
				var index = $(this).val();
				$('.js-museum-nav').slick('goTo', index - 1);
			};
		});

	});
	
	function museumScroll() {
		var items = $('.js-museum-section'),
			scrollItems  = $('.js-museum-section').map(function(){return $(this);});
		$('.js-museum-for').mCustomScrollbar({
			axis:"x",
			scrollbarPosition: "inside",
			scrollInertia: 1000,
			contentTouchScroll: true,
			documentTouchScroll: true,
			autoHideScrollbar: true,
			callbacks:{
				whileScrolling: function() { 
					var mscLeft = this.mcs.leftPct;

					var cur = scrollItems.map(function(){
							if ($(this).offset().left < mscLeft) return this;
						});


					if (cur.length == 0) {
						cur = scrollItems[0]
					}
					else {
						cur = cur[cur.length-1];
					};

					// console.log(cur.index());

					var containerWidth = $('.mCSB_container').outerWidth()/100;
					scrollItems.map(function(){
						if (mscLeft >= Math.round($(this).position().left/containerWidth)) {
							var index = cur.index();
							$('.js-museum-nav').slick('goTo', index);
							$('.js-museum-section').removeClass('is-active');
							$(this).addClass('is-active');
							$('.js-museum-select.is-season').find('.js-museum-select-text').text($('.js-museum-select.is-season').find('option').eq(index).text());
						};
					});
				}
			}
		});
	}

	$(window).load(function() {
		museumScroll();
	});
	$(window).resize(function() {
		$('.js-museum-for').mCustomScrollbar("update");
	});

	//filter
	$('.js-museum-btn').click(function() {
		var btn = $(this).data('filter'),
			btns = $('.js-museum-btn'),
			items = $('.js-museum-block'),
			currItem = $('.js-museum-block[data-block=' + btn + ']');

		btns.removeClass('is-active');
		$('.js-museum-btn[data-filter=' + btn + ']').addClass('is-active');
		$(this).addClass('is-active');
		items.addClass('is-disabled');
		currItem.removeClass('is-disabled');	

		$('.museum__select.is-season').removeClass('is-hidden');

		if ($(this).hasClass('is-all')) {
			items.removeClass('is-disabled');		
		}

		return false;
	});

	$('.js-museum-all').click(function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.js-museum-tab.is-all').removeClass('is-active');
			$('.js-museum-tab.is-slider').addClass('is-active');
			$('.museum-bottom__btn').removeClass('is-hidden');
		}
		else {
			$(this).addClass('is-active');
			$('.js-museum-tab.is-all').addClass('is-active');
			$('.js-museum-tab.is-slider').removeClass('is-active');
			$('.museum-bottom__btn').addClass('is-hidden');
		};
		return false;
	});

	function museumBtns() {
		$('.js-museum-select').each(function() {
			if ($(this).hasClass('is-filter')) {
				$(this).find('.js-museum-select-text').text($('.js-museum-btn.is-active').find('span').text());
			};			
		});		
	}

	$(window).resize(function() {
		museumBtns();
	});

	$('.museum-cup').click(function() {

		if (!$(this).hasClass('is-disabled')) {		
			$('.js-museum-popup').addClass('is-active');
			var index = $(this).data('index');
			$('body').addClass('is-hidden');
			$('.js-museum-gallery').slick('goTo', index - 1);
		};

		return false;
	});
	$('.js-museum-close').click(function() {
		$('.js-museum-popup').removeClass('is-active');
		$('body').removeClass('is-hidden');
		return false;
	});
	$('.js-museum-popup').each(function() {
		$('body').click(function() {
			$('.js-museum-popup').removeClass('is-active');
			$(this).removeClass('is-hidden');
		});
		$(this).find('.museum-popup__inner').click(function(event) {
			event.stopPropagation();
		});		
	});

	$('.js-museum-gallery').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true
	});

	$('.js-museum-left').click(function() {
		$('.js-museum-gallery').slick('slickPrev');
	});

	$('.js-museum-right').click(function() {
		$('.js-museum-gallery').slick('slickNext');
	});


	//
	$('.js-main-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		asNavFor: '.js-main-slider-thumbs',
		responsive: [ 
			{
				breakpoint: 1100,
				settings: {
					variableWidth: false
				}
			}
		]
		// infinite: false
	})
	$('.js-main-slider-thumbs').slick({
		asNavFor: '.js-main-slider',
		variableWidth: true,
		focusOnSelect: true,
		arrows: false,
		slidesToShow: 18,
		centerMode: true,
		infinite: true,
	});	
	$('.js-mc-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		asNavFor: '.js-mc-slider-thumbs',
		centerPadding: '20%',
		responsive: [ 
			{
				breakpoint: 768,
				settings: {
					centerPadding: false
				}
			}
		]
	})
	$('.js-mc-slider-thumbs').slick({
		asNavFor: '.js-mc-slider',
		variableWidth: true,
		focusOnSelect: true,
		arrows: false,
		slidesToShow: 18,
		centerMode: true,
		infinite: true,
	});	

	$('.js-posts-list .post').hoverIntent(updateNews);

	$(window).resize(function() {
		newsImg();
	});

	$(window).load(function() {
		newsImg();
	});

	function newsImg() {
		$('.js-news-upd').css('min-height', $('.js-posts-list').outerHeight());
	}

	function updateNews () {
		var $el = $(this),
			img = $el.data('img'),
			link = $el.attr('href');
			header = $el.find('.js-post-header').text(),
			updImg = $('.js-news-upd'),
			updHeader = $el.parents('.js-news-block').find('.js-news-upd-header');
		updImg.attr('style', 'background-image: url(' + img + ');' + 'min-height: ' + $('.js-posts-list').outerHeight() + 'px;');
		updHeader.attr('href', link);
		updHeader.text(header);
	}

	//tooltip
	$('.tooltip').tooltipster({
		arrow: false,
		contentAsHTML: true,
		interactive: true
	});

	$('.js-tooltip').tooltipster({
		contentAsHTML: true,
		interactive: true,
		arrowColor: '#197fba',
	});

	$('.js-page-open').click(function() {
		$(this).siblings('.js-page-drop').toggleClass('is-active');
		return false;
	});

	$('.js-page-drop').each(function() {
		$('body').click(function() {
			$('.js-page-drop').removeClass('is-active');
		});
		$(this).click(function(event) {
			event.stopPropagation();
		});
	});


	// switcher
	$('.js-switcher input[type="checkbox"]').on('change', function() {
		var $blocks = $('.' + $(this).parents('.js-switcher').data('blocks'));
		$blocks.toggleClass('is-active');
	});

	// js-seasons-slider
	$('.js-seasons-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 1221,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 5
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		]
	});
	$('.js-tours-slider').slick({
		slidesToShow: 11,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 1221,
		      settings: {
		        slidesToShow: 9,
		        slidesToScroll: 5
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		]
	});

	$('.js-choose-link').on('click', function() {
		var links = $(this).parents('.js-choose').find('.js-choose-link');

		links.removeClass('is-active');
		$(this).addClass('is-active');

		return false;
	});

	$('.js-player-info-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
		    },
		  ]
	})
});