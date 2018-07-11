
$(document).ready(function(){

  $('.popover-link').popover({ trigger: "hover" });

	$(".agreedCheck").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents().next('.form-group').show();
      $(this).parents().addClass('active');

    } else {
      $(this).parents().next('.form-group').hide();
      $(this).parents().removeClass('active');
    }
  });
  
  $("#spouse-agree").click(function () {	  
    if ($(this).is(":checked")) {
      $(this).parents().next('.placeholder-text').show();
      $(this).parent().addClass('active');

    } else {
      $(this).parents().next('.placeholder-text').hide();
      $(this).parent().removeClass('active');
    }
  });

  

  $('.grid-view-link').click(function(){	 
	 $('.list-view').hide();
	 $('.grid-view').show();
	 $('.list-view-link').removeClass('active');
	 $('.grid-view-link').addClass('active');
	 
  });
  
  $('.list-view-link').click(function(){
	   $('.grid-view').hide();
	  $('.list-view').show();
	  $('.list-view-link').addClass('active');
	  $('.grid-view-link').removeClass('active');
	  
  });
  
  $(".switch-input").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents().next('.auto-renewal-tips').show();
    } else{
      $(this).parents().next('.auto-renewal-tips').hide();
    }
  });

  $(".cart-pd-select input[type='checkbox']").click(function () {    
    if ($(this).is(":checked")) {
      $(this).parents().find('a.disabled').addClass('active');

    } else {
      $(this).parents().find('a.disabled').removeClass('active');
    }
  });

  // Accordion function
  function toggleChevron(e) {
      $(e.target)
          .prev('.panel-heading')
          .find("span.indicator")
          .toggleClass('glyphicon-menu-up glyphicon-menu-down');
  }
  $('#accordion').on('hidden.bs.collapse', toggleChevron);
  $('#accordion').on('shown.bs.collapse', toggleChevron);
  $('#accordion2').on('hidden.bs.collapse', toggleChevron);
  $('#accordion2').on('shown.bs.collapse', toggleChevron);

  $('#personalDetailsAccordion').on('hidden.bs.collapse', toggleChevron);
  $('#personalDetailsAccordion').on('shown.bs.collapse', toggleChevron);
  $('#contactDetailsAccordion').on('hidden.bs.collapse', toggleChevron);
  $('#contactDetailsAccordion').on('shown.bs.collapse', toggleChevron);
  $('#my-shopping-list-accordion').on('hidden.bs.collapse',toggleChevron);
  $('#my-shopping-list-accordion').on('shown.bs.collapse',toggleChevron);
  $('#shopping-list-spouse-accordion').on('hidden.bs.collapse',toggleChevron);
  $('#shopping-list-spouse-accordion').on('shown.bs.collapse',toggleChevron);
  $('#shopping-list-father-accordion').on('hidden.bs.collapse',toggleChevron);
  $('#shopping-list-father-accordion').on('shown.bs.collapse',toggleChevron); 


  
  $('#facetShopping .accordion-toggle').click(function(){   
    $(this).find('.facet-indicator').toggleClass('glyphicon-minus glyphicon-plus');
  })

  $('#accordion-plus .accordion-toggle').click(function(){   
    $(this).find('.indicator').toggleClass('glyphicon-minus glyphicon-plus');
  })

  //Add New Address button function
  $('.addAddress, .cancelAddAddress').click(function(){
    $(this).parents('.new-address-form').hide();
    $('.add-new-address-btn').removeClass('disabled');
  }) 


  // Resignation submit button function start
  $(".submit-resignation-btn").click(function(){
    $(this).parents().next().find(".otp-wrapper-section").show();
    //alert("deepak");
    $(this).addClass("disabled");
  });

  $(".validate-btn").click(function(){
    $(this).parents().next(".success-wrapper-section").show();
    $(this).parents(".otp-wrapper-section").hide();
  });
  // Resignation submit button function end

  // profile-Mobile-Otp-Validate-Now
  $('#profile-Mobile-Otp-Validate-Now').click(function(){
    $(this).parents('.profile-otp-box').hide();
    $('#profile-primary-mobile-div').addClass('validate-success');
  });

  $('.edit-input').click(function(){
    $(this).parent().parent().find('.form-control').removeAttr("disabled");
    $(this).parent().parent().find('.form-control').focus();
    $(this).parent().next('.saveCancelbtn').show();
  });

  $('.ord-setting a').click(function(){
    $(this).parents().next().find('.form-control').removeAttr("disabled");
    //$(this).parents().next().find('.form-control').focus();
  });

  $('.saveLink, .cancelLink').click(function(e){
    e.preventDefault();
    $(this).parent().hide();
    $(this).parent().parent().find('.form-control').attr("disabled", true );  
  });

  $('.saveLink').click(function(e){   
    $(this).parent().parent().next('.profile-otp-box').show();    
  });
  $('.profile-validated').click(function(){
    $(this).parents('.profile-otp-box').hide();
  })

  // Onchange open URL via select dropdown - jQuery
  $('#bec-dropdown-menu').on('change', function () {
    var url = $(this).val(); // get selected value
    if (url) { // require a URL
        window.location = url; // redirect
    }
    return false;
  });

  //Global radio and checkbox custom design function Start
  $('.checkbox input[type=checkbox], .radio input[type=radio],.checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').each(function(){
  $(this).wrap('<label class="radio-check"></label>').css({'position':'relative', 'z-index':-1});   
    if($(this).is(':checked'))
    {
      $(this).parent().addClass('checked');
    }
  })
  $('.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox]').parent().addClass('checkbox');
  $('.checkbox input[type=radio], .radio-inline input[type=radio]').parent().addClass('radiobutton');
  $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').click(function(){    
    if($(this).is(':checked'))
    {
      $(this).parent().addClass('checked');
    }
    else    
    {
      $(this).parent().removeClass('checked');
    }
  })
  $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').parent().hover(function(){
    $(this).addClass('hovered');
  },function(){
    $(this).removeClass('hovered');
  })
  $('.checkbox input[type=radio], .radio-inline input[type=radio]').click(function(){
    var i_name = $(this).attr('name');
    $('.radio input[type=radio][name='+i_name+'], .radio-inline input[type=radio][name='+i_name+']').parent().removeClass('checked');
    $(this).parent().addClass('checked');
  })
  $('.checkbox input:disabled, .radio-inline input:disabled').parent().addClass('disabled');
  //Global radio and checkbox custom design function end
    
  /* Table sort icons function */
  $(".address-list-sort > thead > tr > th, .sortingTable > thead > tr > th").click(function(){
    $(this).find(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
  });

  //wishlist popover 
  $('.wishlist-popover').click(function(){
    $(this).toggleClass('added')
  });

  $('.wishlist-popover').popover().click(function () {
    setTimeout(function () {
      $('.wishlist-popover').popover('hide');
    }, 1000);
  });

  
  //$("#primary-app-datepicker").prop('disabled', true);


  //Mobile OTP Function
  $("#mobileOtpValidate").click(function(){
    $(this).parents().next('.otp-validation').toggle();
  })

  $('#mobileOtpValidateNow').click(function(){
    $(this).parents('.otp-validation').hide();
    $(this).parents('.form-group').addClass('validate-success');
  })

 //EmailOtp Function
 $("#emailOtpValidate").click(function(){
    $(this).parents().next('.otp-validation').toggle();
  })

  $('#emailOtpValidateNow').click(function(){
    $(this).parents('.otp-validation').hide();
    $(this).parents('.form-group').addClass('validate-success');
  })
  

  $(".mobileCheck").click(function () {
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

  $('.dropdown-acc-toggle').click(function(){
    $(this).parents().find('li').removeClass('active');
    $(this).parent().toggleClass('open active');
    //$(this).next('.dropdown-menu').slideToggle();
  })

  //Datepicker  
  if($("#datepicker, #primary-app-datepicker, #co-app-datepicker").length){
    $("#datepicker, #primary-app-datepicker, #co-app-datepicker").datepicker({ 
      autoclose: true, 
      todayHighlight: true
    }).datepicker('update', new Date());
  };
  

  //Owl carousel Function

  //home page main slider
  $("#home_banner").owlCarousel({         
    navigation: true,
    rewindNav : false, 
    pagination : true,
    singleItem : true                
  });

  // Home page Pormotional Slider
  $("#pormotionalSlider").owlCarousel({
    autoPlay: 4000, //Set AutoPlay to 3 seconds    
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,3],
    itemsTablet : [768,2],
    navigation: true,
    rewindNav : false,
    pagination:false,
    //singleItem : true      
  });

  // Home page Digital Slider
  $("#digital_banner").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,3],  
    itemsTablet :   [768,3],
    itemsMobile :  [479,2],     
    navigation: true,
    rewindNav : false, 
    pagination : false      
  });

  //Category top slider for sopping pages
  $("#categories_slider_shopping").owlCarousel({
    items : 5,
    navigation: true,
    rewindNav : false, 
    pagination : false,          
    itemsDesktop : [1000,5], // 2 items between 1000px and 901px
    itemsDesktopSmall : [900,5], // betweem 900px and 601px
    itemsTablet: [700,5], // 2 items between 600 and 480
    itemsMobile : [479,5] , // 1 item between 479 and 0
    scrollPerPage : true
  });


  //Category top slider for sopping pages
  $("#categories_slider_business").owlCarousel({
    items : 8,
    navigation: true,
    rewindNav : false, 
    pagination : false,          
    itemsDesktop : [1000,8], // 2 items between 1000px and 901px
    itemsDesktopSmall : [900,6], // betweem 900px and 601px
    itemsTablet: [700,5], // 2 items between 600 and 480
    itemsMobile : [479,5] , // 1 item between 479 and 0
    scrollPerPage : true
  });



  

  

});

