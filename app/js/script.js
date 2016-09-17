

$(document).ready(function(){
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	$('.swicher__btn').click(function(){
		$(this).toggleClass('swicher__btn--turn');
	})

	//init select style
	$('.select--style').niceSelect();
	$('.nice-select').append('<i class="select--arrow icon-arrow-down"> </i>')
	//only number in input
	function onlyInteger(a){	
		$(a).bind("change keyup input click", function() {
		    if (this.value.match(/[^0-9]/g)) {
		        this.value = this.value.replace(/[^0-9]/g, '');
		    }
		});
	}
	$('.range-set .select--style .list li').click(function() {
		var selectMoney = $(this).text();
		$('.range-set .select--style ').each(function(){
				$('.range-set .current').html(selectMoney);
		})
	});

	//range slider
	var start = 100 
	var end = 1000
 	$(".range").ionRangeSlider({
 		min:start,
 		max:end
 	});
 	onlyInteger(".range-control");
	var slider = $(".range").data("ionRangeSlider");
	$('.range-start').val(100);
	$('.range-end').val(1000);
	$('.range-control').keyup(function() {
		start = $('.range-start').val();
		end = $('.range-end').val();
		slider.update({
   			 min: start,
   			 max: end,
			});
		console.log(start);
	});
	


	//slider review
	$(".review-sound__slider").owlCarousel({
		 items : 1,
		 dots: true,
		 autoplay : true,
		 singleItem:true,
		 nav:true,
			navText:['<span class="icon-arrow-left"></span>','<span class="icon-arrow-right"></span>']
	 	}	 
	);

	//slider operator
	$(".operator-people").owlCarousel({
		responsive : {
	 		320:{
			 	items : 1
	 		},
	 		1024:{
			 	items : 3
	 		},
	 		1200:{
			 	items : 3
		 	},
		 	1378:{
			 	items : 4
		 	},
		 	1920:{
			 	items : 4
		 	},
		 	
	  	},
		 dots: true,
		 autoplay : true,
		 singleItem:true,
		 loop:true,
		 nav:true,
			navText:['<span class="icon-arrow-left"></span>','<span class="icon-arrow-right"></span>']
	 	}	 
	);
	
	//Slider only mobile
	function mobileSlider(resolution,sliderClass) {
	    var checkWidth = $(window).width();
	    var slider = $(sliderClass);
	    if (checkWidth < resolution - 1) {
	      slider.trigger('destroy.owl.carousel'); 
	      slider.removeClass('owl-carousel');
	    } else if (checkWidth > resolution) {
	    	slider.addClass('owl-carousel')
	      slider.owlCarousel({
	        items : 1,
				 	autoHeight : true,
				 	autoplay : true,
				 	singleItem:true,
				 	 nav:true,
				 	 navText:['<span class="icon-arrow-left"></span>','<span class="icon-arrow-right"></span>']
	 
	      });
	    }
	  }


	//
	$(window).resize(function(){
			mobileSlider(1024,'.review-sound__slider');
		}
	);
	mobileSlider(1024,'.review-sound__slider');

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}
	if (isIE () == 9) {
		$('body').append('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')
		$("html,body").css("overflow","hidden");
	}

	
/* ###### For SlideToggle Elements  ######*/
var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}

//toggle for solution
if ($(window).width() < 1024) {
	hideToggle('.solution-toggle','.solution-control__select');
};

//Tab solution

$('.solution-control__drop .option').click(function(){
	var activeEl = $(this).index();
	console.log(activeEl);
	$('.solution-item__wraper').removeClass('hidden');
	$('.solution-item__wraper').addClass('hidden');
	$('.solution-item__wraper').each(function(){
		if ($(this).index() == activeEl) {
			$(this).removeClass('hidden');			
		};
	});

})


//Slide left menu
var slideToggleLeftMenu = function(targetClick,toggleEl) {
	$(targetClick).click(function(event){
			event.stopPropagation();
			$(toggleEl).toggleClass("slide-menu--show");
			$('body').append("<div class='filter'></div>")
	});
	$(toggleEl).on("click", function (event) {
		event.stopPropagation();
	});
	$(document).on("click", function () {
			$(toggleEl).removeClass("slide-menu--show");
			$('.filter').remove();
	});
}
	
slideToggleLeftMenu('.main-page-header__toggle','.slide-menu'); 
$('.slide-menu__wraper .icon-close').click(function(){
	$('.filter').remove();
	$('.slide-menu').removeClass("slide-menu--show");
})

//Blur bottom menu

$('.toggle-bot-menu').click(function(){
		$('.main-page__footer-wrap').bPopup({
			closeClass:'icon-close',
			position:['auto','auto'], // position center
			follow: [true,false],
		}); 
})

$('.toggle-bot-menu').click(function(){
	$('.blur__wraper').toggleClass('blur-filter');
})
$('.main-page__footer .icon-close').click(function(){
	$('.blur__wraper').toggleClass('blur-filter');
})

//modal order
$('.get-modal-order').click(function(){
		$('.modal-order').bPopup({
			closeClass:'icon-close',
			position:['auto','auto'], // position center
			follow: [true,false],
		}); 
})

//modal callback
$('.get-modal-callback').click(function(){
		$('.modal-callback').bPopup({
			closeClass:'icon-close',
			position:['auto','auto'], // position center
			follow: [true,false],
		}); 
})



	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/


	
})


audiojs.events.ready(function() {
    var ajso = audiojs.createAll();
     $('.audiojs .play-pause').on('click', function(){
        var thisIndex = $(this).parents('.audiojs').index('.audiojs');
        $.each(ajso, function(index,val){
            if ( index != thisIndex && ajso[index].playing ) ajso[index].pause(); 
        });
    });
  });
