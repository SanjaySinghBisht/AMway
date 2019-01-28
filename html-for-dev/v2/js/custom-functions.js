$(document).ready(function() {

    
    //Grid and list view
    $(".grid-icon a.list").click(function() {
        $('.product-grid-view').hide();
        $('.product-list-view').show();
        $(this).addClass('active');
        $('.grid-icon a.grid').removeClass('active');

    });
    $(".grid-icon a.grid").click(function() {
        $('.product-list-view').hide();
        $('.product-grid-view').show();
        $('.grid-icon a.list').removeClass('active');
        $(this).addClass('active');
    });

    $(".after-login-form-top-box a").click(function() {
        $(this).addClass("active");
        if ($(this).siblings().first().hasClass("active")) {
            $(this).siblings().first().removeClass("active");    
        }        
    });
    // Auto Search function
    /*$(".auto-search-container").hide();
    $(".auto-src-input").click(function(){
      $(".auto-search-container").toggle()
    });*/

    /* Social link function
    $(".social-link-toggle a").click(function(){
        $(this).parents().find(".social-link-inner-cont").toggle("slide");
    }); */

    // Filter by Function
    $(".filter-list-item").click(function() {
        $(this).toggleClass("active")
    });

    // Color Choose option Function
    $(".color-op-dropdown a").click(function() {
        $(this).find('.glyphicon').toggleClass("glyphicon-menu-down glyphicon-menu-up");
        $(this).parents().find(".color-choose-more-options").toggle();
    });
    /* $(document).click(function(){
        $(".color-choose-more-options").hide()
    });*/

    // products-list-toggle Function
    $(".products-list-toggle").click(function() {
        $(this).find('.glyphicon').toggleClass("glyphicon-menu-up glyphicon-menu-down");
        $(this).parents('tr').next(".products-list-table").toggle();
    });


    $('.panel-body li').on('click', function(event) {
        $(this).prop('checked', true);
        var $this = $(this);
        if ($this.hasClass('clicked')) {
            $this.removeClass('clicked');
            $this.find('input').prop('cecked', false);
        } else {
            $this.addClass('clicked');
            $this.find('input').prop('checked', true);
        }
    });


    $('.popover-link').popover({ trigger: "hover" });

    $(".agreedCheck").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents().next('.form-group').show();
            $(this).parents().addClass('active');

        } else {
            $(this).parents().next('.form-group').hide();
            $(this).parents().removeClass('active');
        }
    });

    $("#spouse-agree").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents().next('.placeholder-text').show();
            $(this).parent().addClass('active');

        } else {
            $(this).parents().next('.placeholder-text').hide();
            $(this).parent().removeClass('active');
        }
    });

    // Forgot password button function
    $(".otp-validate-btn").click(function() {
        $(this).parents(".otp-container").toggle();
        $(this).parents().find(".forgot-pass-container").toggle();
    });

    // Forgot password button function
    $(".fst-login-next-btn").click(function() {
        $(this).parents(".first-time-login-input").toggle();
        $(this).parents().find(".send-otp-container").toggle();
    });
    $(".send-otp-btn").click(function() {
        $(this).parents(".send-otp-container").toggle();
        $(this).parents().find(".otp-container").toggle();
    });

    $('.grid-view-link').click(function() {
        $(this).parents('.tab-pane').find('.list-view').hide();
        $(this).parents('.tab-pane').find('.grid-view').show();
        $(this).parents('.grid-list-view').find('.list-view-link').removeClass('active');
        $(this).addClass('active');

    });

    $('.list-view-link').click(function() {
        $(this).parents('.tab-pane').find('.grid-view').hide();
        $(this).parents('.tab-pane').find('.list-view').show();
        $(this).parents('.grid-list-view').find('.grid-view-link').removeClass('active');
        $(this).addClass('active');

    });
	
	$('.grid-view-link').click(function() {
			$(this).parents('.right-inner-panel').next('.right-panel-div').find('.list-view').hide();
			$(this).parents('.right-inner-panel').next('.right-panel-div').find('.grid-view').show();
			

		});

		$('.list-view-link').click(function() {
			$(this).parents('.right-inner-panel').next('.right-panel-div').find('.grid-view').hide();
			$(this).parents('.right-inner-panel').next('.right-panel-div').find('.list-view').show();
			
		});	
	/*$('.profile-tab-section').find('.tab-pane').click(function(){
		
		$(this).find('.list-view').css('display','none');
		$(this).find('.grid-view').css('display','block');
	});*/
	

    $(".switch-input").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents().next('.auto-renewal-tips').show();
        } else {
            $(this).parents().next('.auto-renewal-tips').hide();
        }
    });

    $(".cart-pd-select input[type='checkbox']").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents().find('a.disabled').addClass('active');

        } else {
            $(this).parents().find('a.disabled').removeClass('active');
        }
    });

    // Accordion function
    
    $('.accUpDown .accordion-toggle').click(function() {        
        $(this).find('.indicator').toggleClass('glyphicon-menu-up glyphicon-menu-down');
    })

    $('.accPlusMinus .accordion-toggle').click(function() {
        //alert('adcad');
        $(this).find('.indicator').toggleClass('glyphicon-minus  glyphicon-plus');
    })

    $('#facetShopping .accordion-toggle').click(function() {
        $(this).find('.facet-indicator').toggleClass('glyphicon-minus glyphicon-plus');
    })

    $('#accordion-plus .accordion-toggle').click(function() {
        $(this).find('.indicator').toggleClass('glyphicon-minus glyphicon-plus');
    })


    //Add New Address button function
    $('.addAddress, .cancelAddAddress').click(function() {
        $(this).parents('.new-address-form').hide();
        $('.add-new-address-btn').removeClass('disabled');
    })

    // My Account page Add New 
    $(".shipping-address-list .add-new-address-btn").click(function() {
        $(".new-address-form").show();
        // alert("deepak");
        $(this).addClass("disabled")
    });

    // Resignation submit button function start
    $(".submit-resignation-btn").click(function() {
        $(this).parents().next().find(".otp-wrapper-section").show();
        //alert("deepak");
        $(this).addClass("disabled");
    });

    $(".validate-btn").click(function() {
        $(this).parents().next(".success-wrapper-section").show();
        $(this).parents(".otp-wrapper-section").hide();
    });
    // Resignation submit button function end

    // profile-Mobile-Otp-Validate-Now
    $('#profile-Mobile-Otp-Validate-Now').click(function() {
        $(this).parents('.profile-otp-box').hide();
        $('#profile-primary-mobile-div').addClass('validate-success');
    });

    $('.edit-input').click(function() {
        $(this).parent().parent().find('.form-control').removeAttr("disabled");
        $(this).parent().parent().find('.form-control').focus();
        $(this).parent().next('.saveCancelbtn').show();
    });

    $('.ord-setting a').click(function() {
        $(this).parents().next().find('.form-control').removeAttr("disabled");
        //$(this).parents().next().find('.form-control').focus();
    });

    $('.saveLink, .cancelLink').click(function(e) {
        e.preventDefault();
        $(this).parent().hide();
        $(this).parent().parent().find('.form-control').attr("disabled", true);
    });

    $('.saveLink').click(function(e) {
        $(this).parent().parent().next('.profile-otp-box').show();
    });
    $('.profile-validated').click(function() {
        $(this).parents('.profile-otp-box').hide();
    })

    // Onchange open URL via select dropdown - jQuery
    $('#bec-dropdown-menu').on('change', function() {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    //Global radio and checkbox custom design function Start
    $('.checkbox input[type=checkbox], .radio input[type=radio],.checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').each(function() {
        $(this).wrap('<label class="radio-check"></label>').css({ 'position': 'relative', 'z-index': -1 });
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        }
    })
    $('.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox]').parent().addClass('checkbox');
    $('.checkbox input[type=radio], .radio-inline input[type=radio]').parent().addClass('radiobutton');
    $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').click(function() {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    })
    $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').parent().hover(function() {
        $(this).addClass('hovered');
    }, function() {
        $(this).removeClass('hovered');
    })
    $('.checkbox input[type=radio], .radio-inline input[type=radio]').click(function() {
        var i_name = $(this).attr('name');
        $('.radio input[type=radio][name=' + i_name + '], .radio-inline input[type=radio][name=' + i_name + ']').parent().removeClass('checked');
        $(this).parent().addClass('checked');
    })
    $('.checkbox input:disabled, .radio-inline input:disabled').parent().addClass('disabled');
    //Global radio and checkbox custom design function end

    /* Table sort icons function */
    $(".address-list-sort > thead > tr > th, .sortingTable > thead > tr > th").click(function() {
        $(this).find(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
    });

    //wishlist popover 
    $('.wishlist-popover').click(function() {
        $(this).toggleClass('added')
    });

    $('.wishlist-popover').popover().click(function() {
        setTimeout(function() {
            $('.wishlist-popover').popover('hide');
        }, 1000);
    });

    $('.popover-global').popover({ trigger: "hover" });
    //$('.wishlist-popover.disabled').popover('disable');
    


    //$("#primary-app-datepicker").prop('disabled', true);


    //Mobile OTP Function
    $("#mobileOtpValidate").click(function() {
        $(this).parents().next('.otp-validation').toggle();
    })

    $('#mobileOtpValidateNow').click(function() {
        $(this).parents('.otp-validation').hide();
        $(this).parents('.form-group').addClass('validate-success');
    })

    //EmailOtp Function
    $("#emailOtpValidate").click(function() {
        $(this).parents().next('.otp-validation').toggle();
    })

    $('#emailOtpValidateNow').click(function() {
        $(this).parents('.otp-validation').hide();
        $(this).parents('.form-group').addClass('validate-success');
    })


    $(".mobileCheck").click(function() {
        if ($(this).is(":checked")) {
            $('#emailOtpForm').show();
            $('#mobileOtpForm').find('.form-control, .btn').attr('disabled', 'disabled');
            $('#mobileOtpForm').find('.btn').addClass('disabled');
        } else {
            $('#emailOtpForm').hide();
            $('#mobileOtpForm').find('.form-control, .btn').removeAttr('disabled', 'disabled');
            $('#mobileOtpForm').find('.btn').removeClass('disabled');
        }
    });

    //Vertical Tabbed Function

    $('.dropdown-acc-toggle').click(function() {
        $(this).parents().find('li').removeClass('active');
        $(this).parent().toggleClass('open active');
        //$(this).next('.dropdown-menu').slideToggle();
    })

    //Datepicker  
    if ($("#datepicker, #primary-app-datepicker, #co-app-datepicker").length) {
        $("#datepicker, #primary-app-datepicker, #co-app-datepicker").datepicker({
            autoclose: true,
            todayHighlight: true
        }).datepicker('update', new Date());
    };

    // Mobile menu for Business center
    $('.bc-leftmenu-hamburger, .kc-leftmenu-hamburger, .cc-leftmenu-hamburger').click(function(){
      $(this).toggleClass('active-toggle');
      $(this).find('.glyphicon').toggleClass('icon-list glyphicon-remove');
    });

    // Order Summary function for mobile
    
    $('.ord-summary-hamburger').click(function(){
      $(this).parent().next(".total-ord-amount-box").toggleClass('hidden');
      $(this).find('.glyphicon').toggleClass('glyphicon-menu-up glyphicon-menu-down');
    });

    var ordersummaryHeight = $(window).height();
    var windowWidth = $(window).width(); 
    if (windowWidth < 991) {
        $(document).on("click",".ord-summary-hamburger",function() {  
        //$('body').toggleClass('scroll-hidden');           
        $('.ord-summary-collapse').css("max-height", ordersummaryHeight - 120);    
        });
    }

    // Pin Invitation / Confirmation
    $(".pin-confirm-attend-form a.btn").click(function(){
      $(".pin-invst-success").show();
      $(".pin-confirm-attend-form").hide();
    });

    //Owl carousel Function
    $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
        if (!event.namespace) return;
        var carousel = event.relatedTarget,
            element = event.target,
            current = carousel.current();
        $('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
        $('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
    })

    
    $('#home_banner').owlCarousel({
        autoplay: 5000,
        items:1,
        slideBy:1,
        loop:false,
        nav:true,
        dots:true
    })

    // Home page Pormotional Slider
    $("#pormotionalSlider").owlCarousel({ 
        autoplay: 5000,       
        items:1,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        margin:5,
        responsive:{0:{items:1},421:{items:2},768:{items:3},992:{items:1}}
             
    });

    // Home page Digital Slider
    $("#digital_banner").owlCarousel({
        autoplay: 5000,
        items:2,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        margin:10,
        responsive:{0:{items:1},421:{items:2},768:{items:3},992:{items:2}}
       
    });

    //knowledge-center landing page
    // landing page Digital Slider
    $("#knw_info_banner").owlCarousel({
        autoplay: 5000,
        items:4,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        margin:10,
        responsive:{0:{items:1},421:{items:2},768:{items:3},992:{items:4}}
    });

    $("#knw_main_banner").owlCarousel({
        autoplay: 5000,
        items:1,
        slideBy:1,
        loop:false,
        nav:true,
        dots:true
    });

    $("#knw_workshop_banner").owlCarousel({
        autoplay: 5000,
        items:1,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false
    });
   

    //Category top slider for sopping pages
    $("#categories_slider_shopping").owlCarousel({
        items:5,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        responsive:{0:{items:5},421:{items:5},768:{items:5},992:{items:5}}
    });

    //Category top slider for sopping pages
    $("#categories_slider_business").owlCarousel({
        items:5,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        responsive:{0:{items:5},421:{items:5},768:{items:5},992:{items:5}}
    });

    $("#best-sellers-carousel").owlCarousel({
        autoplay: 5000,
        items:4,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        margin:10,
        responsive:{0:{items:1},421:{items:2},768:{items:2},992:{items:4}}
    });

    $("#brand_banner").owlCarousel({
        autoplay: 5000,
        items:1,
        slideBy:1,
        loop:false,
        nav:false,
        dots:true
    });

    $("#thumbSlider").owlCarousel({
        items:5,
        slideBy:1,
        loop:false,
        nav:true,
        dots:false,
        margin:10,   
        responsive:{0:{items:3},421:{items:4},768:{items:4},992:{items:5}}     
    });



    var owlCarousel = $('#promotionalProduct');
    $('#promotionModal').on('shown.bs.modal', function (event) {
      owlCarousel.owlCarousel({
        items:2,
            slideBy:1,
            loop:false,
            nav:true,
            dots:false,
            margin:20,  
            responsive:{0:{items:1, nav:false},421:{items:1},768:{items:2},992:{items:2}} 
      });
    });



    //Tabcolllapse for mobile
    if($("#myTab, .tabcollapseMobile").length){
        $('#myTab, .tabcollapseMobile').tabCollapse();
    }

    $(function() {
        $('.facet-container .facet-hamburger').on('click', function(){ 
           $('.sorting-collapse').collapse('hide');
        });
         $('.facet-container .sorting-hamburger').on('click', function(){ 
           $('.facet-collapse').collapse('hide');
        });
    });

    // Shopping Cart Multiple Popup
    $('.another-modal').click(function(){
        setTimeout(function() {
           $('body').addClass('modal-open');
        }, 400);
    })

});

$(document).on("productInformationLoaded", function() {
    $('.vitamin-text').hide();
});