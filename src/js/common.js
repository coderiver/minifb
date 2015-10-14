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


});