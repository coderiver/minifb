$(document).ready(function() {
	
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//	 var scroll_left = $(this).scrollLeft();
	//	 $(".fixed-element").css({
	//		 left: -scroll_left
	//	 });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//	 scrollFixedElements()
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
				$('.js-accordion-body').slideUp('fast');
				$(this).parents('.js-accordion').addClass('is-active');
				$(this).parents('.js-accordion').find('.js-accordion-body').slideDown('fast');				
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

	$(window).resize(function() {

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
	});

	$(window).load(function() {

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
								slidesToShow: 1,
								slidesToScroll: 1
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
	
});