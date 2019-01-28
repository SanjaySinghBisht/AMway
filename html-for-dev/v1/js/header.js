jQuery(document).ready(function($) {

		// Sticker Menu
	    //if($navDesktop.hasClass('sticker')){			
			$(window).scroll(function () {
			 if ($(this).scrollTop() > 600) {
			  $('body').addClass('fixedbody');
			  $('.header-sticker').addClass('header-container-fixed');
			 } 
			 else{
			  $('body').removeClass('fixedbody');
			  $('.header-sticker').removeClass('header-container-fixed');
			 }
			 return false;
			});
	    //}
	    // End Sticker Menu
	

//Cart-menu on mobile
$(".cart-menu").click(function(){
    $(".tool-header").slideToggle();
});
//Tool-header
$(".tool-header ul li .tool-block").click(function(){
    $(this).parent().toggleClass('active');
	$(this).siblings('.fadeDownn').slideToggle();
	$(this).parent().siblings().children('.fadeDownn').slideUp();
	$(this).parent().siblings().removeClass('active');
});
//Grid and list view
 $(".grid-icon a.list").click(function(){
		$('.product-grid-view').hide();
		$('.product-list-view').show();
		$(this).addClass('active');
		$('.grid-icon a.grid').removeClass('active');
		
		});
		 $(".grid-icon a.grid").click(function(){
		$('.product-list-view').hide();
		$('.product-grid-view').show();
		$('.grid-icon a.list').removeClass('active');
		$(this).addClass('active');
		 
		
		});
			 
		

$('.panel-body li').on('click', function(event){
		$(this).prop('checked', true);
        var $this = $(this);
        if($this.hasClass('clicked')){
          $this.removeClass('clicked');
		  $this.find('input').prop('checked', false);
        } else{
          $this.addClass('clicked');
		   $this.find('input').prop('checked', true);
        }
		
				
      });
	

	//Mega-menu function

  $('.menu-hamburger').click(function(){
    $(this).toggleClass('active-toggle');
    $(this).find('.glyphicon').toggleClass('icon-list glyphicon-remove');
  });

  $('.tool-hamburger').click(function(){
    $('.top-tool-block').slideToggle();
    $(this).toggleClass('active-toggle');
    $(this).find('.glyphicon').toggleClass('glyphicon-th glyphicon-remove');
  })

  //Function for mobile only
   var windowWidth = $(window).width();
   
  var menuheight = $(window).height();

  if (windowWidth < 767) { 
     $('.megamenu-block').css("height", menuheight);

    $('.menu-hamburger').click(function(){
            $('.megamenu-block').slideToggle();
        })  

    //Mega Menu  Function for mobile only
    $('.mainCategory').click(function(){
      $(this).parent().toggleClass('open');
    });
   
    $('.subheading .glyphicon').click(function(){
      $(this).toggleClass('glyphicon-plus glyphicon-minus');        
      $(this).parent().next('.L2').slideToggle();

    });
  }  


  if (windowWidth > 767) {   
   //Mega Menu  Function for mobile only
    $(".dropdown").hover(            
      function() {               
            $(this).toggleClass('open');        
        },
        function() {                
            $(this).toggleClass('open');       
        }
    );      
  }

  
});

 