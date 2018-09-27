$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

jQuery(document).ready(function($) {	
	

	//Search Dropdown Function
    $("#languageDdwnValue li a").click(function() {
        //alert('asda');
        var selText = $(this).text();
        var selimg = $(this).find('img').attr('src');
        $(this).parents('.sl-country').find('.languageDdwn').html('<a href="javascript:void(0);"><img src="' + selimg + '">' + selText + ' <span class="langIcon glyphicon glyphicon-chevron-down"></span></a>');
    });

			
	$(window).scroll(function () {
	 if ($(this).scrollTop() > 120) {
	  $('body').addClass('fixedbody');
	  //$('.header-sticker').addClass('header-container-fixed');
	  $('.header-sticker').addClass('header-container-fixed');
	 } 
	 else{
	  $('body').removeClass('fixedbody');
	  $('.header-sticker').removeClass('header-container-fixed');
	 }
	 return false;
	});
	  

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight + 300){
	        // Scroll Down
	        $('.megamenu-block, .top-tool-block').addClass('nav-up');
	        $('.header-sticker').addClass('headerdidScroll');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.megamenu-block').removeClass('nav-up');
	            $('.header-sticker').removeClass('headerdidScroll');
	        }
	    }
	    
	    lastScrollTop = st;
	}

	
	/****Function for mobile only  ********/
	
	$('.tool-header li').on('click', function() {
		if($(this).hasClass('active')){
			  if ($('body').hasClass('scroll-hidden')) {  		 	
		      $('body').removeClass('scroll-hidden');	
			}			
		}
	});

	$('.menu-hamburger').click(function() {  
	 var menuheight = $(window).height();
	 var headerHeight = $('.header-sticker').height();	  
	 var headerfixedHeight = $('.header-sticker.header-container-fixed').height();

	 	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
		    $('html').addClass('ios');		    
		};
		
	    $('body').addClass('scroll-hidden');
	    $('.clickSlide, .hoverSlide').css("max-height", "0");
	    //console.log($('.header-sticker.header-container-fixed').length)
	    if($('.header-sticker.header-container-fixed').length){
	    	$('.megamenu-block .nav-justified').css("height", menuheight - headerfixedHeight);    
	    	
	    }else{
	    	$('.megamenu-block .nav-justified').css("height", menuheight - headerHeight - 5);	   
	    		 	
	    }    
	});

	$('.menu-hamburger').on('click', function() {
		if($(this).hasClass('active-toggle')){	
		  $('html').removeClass('ios');		  		 	
	      $('body').removeClass('scroll-hidden');	
	      $('.megamenu-block .nav-justified').css("height", "0");
	      $('li.dropdown').removeClass('open').find('glyphicon').removeClass('glyphicon-minus');
	      $('li.dropdown .glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	      $('.submenu').removeClass('open-submenu');		
		}
	});

	var windowWidth = $(window).width(); 
    if (windowWidth < 1199) { 

		$('.tool-header li.clickLink, .tool-header li.hoverlink').click(function() { 		
		  var menuheight = $(window).height();
		  var headerHeight = $('.header-sticker').height();	  
		  var headerfixedHeight = $('.header-sticker.header-container-fixed').height();

		  	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
			    $('html').addClass('ios');
			    
			};
			$('body').addClass('scroll-hidden');
			$('.megamenu-block .nav-justified').css("height", "0");
			if($('.header-sticker.header-container-fixed').length){
				$('.clickSlide, .hoverSlide').css("max-height", "0");
		    	$(this).find('.clickSlide, .hoverSlide').css("max-height", menuheight - headerfixedHeight);
		    }else{
		    	$('.clickSlide, .hoverSlide').css("max-height", "0");
		    	$(this).find('.clickSlide, .hoverSlide').css("max-height", menuheight - headerHeight - 5);
		    	   	
		    } 	    	         
		});

		$('.tool-header li').on('click', function() {
			if($(this).hasClass('active')){	
			  $('html').removeClass('ios');		  		 	
		      $('body').removeClass('scroll-hidden');
		      $(this).find('.clickSlide, .hoverSlide').css("max-height", "0");	      		
			}
		});
	}

	



	

	/****Function for mobile only end  ********/

/***************Mega-menu function**********/

	$('.menu-hamburger').click(function(){
	  $(this).toggleClass('active-toggle');
	  $(this).find('.glyphicon').toggleClass('icon-list glyphicon-remove');
	});

    //Click link for all
	$(".tool-header li.clickLink, .tool-header li.hoverlink").click(function(e){
		e.stopPropagation();
	    $(this).toggleClass('active');
		$(this).find('.clickSlide, .hoverSlide').slideToggle('fast');
		$(this).siblings().children('.clickSlide, .hoverSlide').slideUp('fast');
		$(this).siblings().removeClass('active');			
		//$(this).removeClass('active').find('.clickSlide, .hoverSlide').slideUp();
	});

	//Function for prevent hide dropdown on click within dropdown box
	$('.clickSlide, .hoverSlide').click(function(e){
		//alert();
		
		e.stopPropagation();
	})

  	//Hover link for desktop
  	var windowWidth = $(window).width(); 
    if (windowWidth > 1199) { 
	    $(".tool-header li.hoverlink").hover(function(){
		    $(this).toggleClass('active');
			$(this).find('.hoverSlide').stop( true, true ).slideToggle();
			$(this).siblings().children('.hoverSlide, .clickSlide').stop( true, true ).slideUp('fast');
			$(this).siblings().removeClass('active');
		},function(){
			$(this).toggleClass('active');
			$(this).find('.hoverSlide').stop( true, true ).slideToggle('fast');
		});
  	}

/***************Mega-menu function end**********/


/****Function for mobile only********/  
 

  if (windowWidth < 1199) { 
  	//$('.megamenu-block').css("height", menuheight);

  	var droplink = $('.tool-header li'); 
  	$(droplink).on('click', function() {
  		if($(this).hasClass('active')){
  		$('body').addClass('scroll-hidden');
  		$('.menu-hamburger').removeClass('active-toggle');
  		$('.menu-hamburger span').addClass('icon-list').removeClass('glyphicon-remove');
  		}
	});

	$(droplink).click(function () {
	    $('.megamenu').collapse('hide');
	});

	$('.menu-hamburger').click(function(){
		$(droplink).removeClass('active').find('.clickSlide, .hoverSlide').hide();
	});


    //Mega Menu  Function for mobile only
    $('.dropdown > .glyphicon').click(function(){
    	$(this).parents().siblings('li').removeClass('open');
    	$(this).parents().siblings('li').find('span.glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    	$(this).toggleClass('glyphicon-plus glyphicon-minus');
      	$(this).parent().toggleClass('open');
      	$(this).parents().find('.submenu').removeClass('open-submenu');
      	$(this).parents().find('.submenu .glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    });
   
    $('.subheading-block > .glyphicon').click(function(){ 
       $(this).parents('.submenu').toggleClass('open-submenu');      
      $(this).toggleClass('glyphicon-plus glyphicon-minus');      
    });
}  
  /****Function for mobile only  end******/


  if (windowWidth > 1199) {   
	   //Mega Menu  Function for mobile only
	    $(".megamenu .dropdown").hover(            
	      function() {               
	            $(this).toggleClass('open');        
	        },
	        function() {                
	            $(this).toggleClass('open');       
	        }
	    );     
	}


	//Shopping setting

	$("#deliveryAddress, .deliveryAddress").click(function() {	
        if ($(this).is(":checked")) {
            $(this).parents('.form-horizontal').find('.delivery-address-section').show();
            $(this).parents('.form-horizontal').find('.pickup-home-section').hide();

        }
    });

    $("#pickUpPoint, .pickUpPoint").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents('.form-horizontal').find('.pickup-home-section').show();
            $(this).parents('.form-horizontal').find('.delivery-address-section').hide();

        }
    });


});

$(window).resize(function(){
var windowWidth = $(window).width();
if (windowWidth < 1182) { 	
		var menuheight = $(window).height();
		var headerHeight = $('.header-sticker').height();	  
		var headerfixedHeight = $('.header-sticker.header-container-fixed').height();		
			$('.megamenu-block .nav-justified').css("height", menuheight - headerHeight - 5);	
			$('.clickSlide, .hoverSlide').css("max-height", menuheight - headerHeight - 5);		
	
	} else{		
		$('.megamenu-block .nav-justified').removeAttr('style');
	}
})


 