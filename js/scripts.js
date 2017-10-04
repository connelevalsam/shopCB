(function ($) {
	"use strict";

	// Page Loaded...
	$(document).ready(function () {
		$('.open-info').hide();
	    $('.close-box').hide();

		/*==========  Responsive Navigation  ==========*/
		$('.main-nav').children().clone().appendTo('.responsive-nav');
		$('.responsive-menu-open').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('.responsive-menu').addClass('open');
			return false;
		});
		$('.responsive-menu-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
			return false;
		});


		var len = $(".customers a").length;

	    setTimeout(function() {
	        moveCusSlider(3);
	    },15000);

	    function moveCusSlider(i) {
	        if(i>len) i = 0;
	        $(".customers").animate({scrollLeft:i*210}, 500);
	        if(i==0) i=1;
	        setTimeout(function() {
	            moveCusSlider(i*3);
	        }, 3000);
	    }


    });

})(jQuery);