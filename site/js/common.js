$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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

	$('.js-dropdown-btn').click(function() {
		$('.js-dropdown').slideToggle('fast');
		$(this).toggleClass('is-active');
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

	//menu
	$('.js-menu-link').on('click', function() {

		var btn = $(this).data('mlink'),
			btns = $('.js-menu-link'),
			items = $('.js-menu-block'),
			currItem = $('.js-menu-block[data-mblock=' + btn + ']'),
			menu = $('.js-menu').addClass('is-active');

		if ($(this).hasClass('is-active')) {
			btns.removeClass('is-active');
			menu.removeClass('is-active');
			items.removeClass('is-active');
		}
		else {
			btns.removeClass('is-active');
			$(this).addClass('is-active');
			menu.addClass('is-active');
			items.removeClass('is-active');
			currItem.addClass('is-active');
		}


		return false;
	});	

	//fixed menu
	function scrollMenu() {

		var fixedHeight = $('.js-menu-inner').outerHeight(),
			navTop = $('.js-menu-wrap').offset().top;

		if ($(window).width() > 767) {
			$('.js-menu-wrap').css('min-height', fixedHeight);
			if ($(window).scrollTop() >= navTop) {
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

	$(window).scroll(function() {
		scrollMenu();
	});
	$(window).load(function() {
		scrollMenu();
	});
	$(window).resize(function() {
		scrollMenu();
	});

	//match centre

	$('.js-mc-btn').on('click', function() {
		$('.js-mc').toggleClass('is-active');
		$(this).toggleClass('is-active');
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
		if ($('.js-menu').hasClass('is-active')) {
			$('.js-menu').removeClass('is-active');
		};
	});

	//footer
	$('.js-footer-open').click(function() {
		$(this).parent().find('.js-footer-list').toggleClass('is-active');
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
		$(this).addClass('is-active');
		items.removeClass('is-active');
		currItem.addClass('is-active');

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
			if (!$('.js-video-slider').hasClass('slick-initialized')) {
				$('.js-video-slider').slick({
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 767,
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
			if ($('.js-video-slider').hasClass('slick-initialized')) {
				$('.js-video-slider').slick('unslick');
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
		slidesToScroll: 4,
		nextArrow: $('.js-players-slider-next'),
		prevArrow: $('.js-players-slider-prev'),
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2
				}
			},{
				breakpoint: 767,
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

	$('.js-museum-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-museum-nav'
	});
	$('.js-museum-nav').slick({
		slidesToShow: 11,
		slidesToScroll: 1,
		asNavFor: '.js-museum-for',
		dots: false,
		centerMode: true,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0'
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

		$('.js-museum-tab').each(function() {
			if ($(this).hasClass('is-slider')) {
				$('.js-museum-tab').removeClass('is-active');
				$(this).addClass('is-active');					
			};
		});	

		$('.museum__select.is-season').removeClass('is-hidden');

		if ($(this).hasClass('js-museum-all')) {
			if ($(this).hasClass('is-all')) {
				items.removeClass('is-disabled');	
			}
			else {
				$('.js-museum-tab').each(function() {
					if ($(this).hasClass('is-all')) {
						$('.js-museum-tab').removeClass('is-active');
						$(this).addClass('is-active');					
					};
				});
				$('.museum__select.is-season').addClass('is-hidden');			
			}				
		};

		var thisBtn = $(this);

		$('.js-museum-select').each(function() {
			if ($(this).hasClass('is-filter')) {
				$(this).find('.js-museum-select-text').text(thisBtn.text());
			};			
		});		

		return false;
	});

	$('.museum-cup').click(function() {

		if (!$(this).hasClass('is-disabled')) {		
			$('.js-museum-popup').addClass('is-active');
			var index = $(this).data('index');
			$('.js-museum-gallery').slick('goTo', index - 1);
		};

		return false;
	});
	$('.js-museum-close').click(function() {
		$('.js-museum-popup').removeClass('is-active');
		return false;
	});
	$('.js-museum-popup').each(function() {
		$('body').click(function() {
			$('.js-museum-popup').removeClass('is-active');
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
				var index = $(this).val();

				$('.js-museum-for').slick('goTo', index - 1);
				$('.js-museum-nav').slick('goTo', index - 1);
			};
		});

	});

	//match-center

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
					fade: true
				}
			}
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
	function updateNews () {
		var $el = $(this),
			img = $el.data('img'),
			header = $el.find('.js-post-header').text(),
			updImg = $el.parents('.js-news-block').find('.js-news-upd-img img'),
			updHeader = $el.parents('.js-news-block').find('.js-news-upd-header');
		updImg.attr('src', img);
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
});