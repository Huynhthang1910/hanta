(function($) {
  // mobile
  $('.mobile-nav-toggler').on('click', function() {
    $('body').addClass('mobile-menu-visible');
  });
  $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
    $('body').removeClass('mobile-menu-visible');
  });
  // dropdown btn
  $('.mobile-menu li .dropdown-btn').on('click', function() {
    $(this).toggleClass('open');
    $(this).prev('ul').slideToggle(500);
  });

  function headerStyle() {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $('.scroll-top');
      // console.log(windowpos);
      if (windowpos >=110){
        siteHeader.addClass('fixed-header');
        scrollLink.addClass('open');
      }
      else{
        siteHeader.removeClass('fixed-header');
        scrollLink.removeClass('open');
      }
    }
  }

  headerStyle();


  $("#to_top").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
    });
  // preloader
  function handlePreloader() {
    if ($('.loader-wrap').length) {
        $('.loader-wrap').delay(1000).fadeOut(500);
    }
  }
  $(window).on('load', function() {
    handlePreloader();
  });


  $("#search-box-panel").click(function () {
    if ($("#nav-dropdown-search-panel").hasClass("show")) {
      $("#nav-dropdown-search-panel").removeClass("show");
    }else{
      $("#nav-dropdown-search-panel").addClass("show");
    }
  });
  $("#search-box-panel-sticky").click(function () {
    if ($("#nav-dropdown-search-panel-sticky").hasClass("show")) {
      $("#nav-dropdown-search-panel-sticky").removeClass("show");
    }else{
      $("#nav-dropdown-search-panel-sticky").addClass("show");
    }
  });


  // const $menu = $('#nav-dropdown-search-panel')

//   const onMouseUp = e => {
//  if (!$menu.is(e.target) // If the target of the click isn't the container...
//    && $menu.has(e.target).length === 0) // ... or a descendant of the container.
//   {
//     $menu.removeClass('show')
//   }
// }

  // $('#search-box-panels').on('click', () => {
  //   $menu.toggleClass('show')
  // })
  // if ($menu.hasClass('show')) {
  //   $(document).on('mouseup',onMouseUp) // Only listen for mouseup when menu is active...
  // }





  if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: false,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span class="fa-solid fa-arrow-left-long"></span>', '<span class="fa-solid fa-arrow-right-long"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
  }

  // auto scroll single-item-carousel
  $('.single-item-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    smartSpeed: 3000,
    autoplay: false,
    navText: ['<i class="fa-solid fa-long-arrow-left"></i>', '<i class="fa-solid fa-long-arrow-right"></i>'],
    responsive:{
      0:{
        items:1
      },
      480:{
        items:1
      },
      600:{
        items:1
      },
      800:{
        items:1
      },
      1200:{
        items:1
      }

    }
})
  // var owl = $('.single-item-carousel');
  // owl.owlCarousel({
  //     items:1,
  //     dots:true,
  //     nav:false,
  //     loop:false,
  //     margin:10,
  //     autoplay:false,
  //     autoplayTimeout:3000,
  //     autoplayHoverPause:true
  // });
  testimonial = ()=>{
    owl.trigger('play.owl.autoplay',[3000]);
  }
  // testimonial();

  // counter
  // $('.counter').countUp();
  $('.counter').countUp({
    'time': 2000,
    'delay': 10
  });


  // auto scroll clients
  $('.clients-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800: {
          items: 4
        },
        1000:{
          items:4
        },
        1200:{
          items:6
        }
    }
})
  var owl = $('.clients-carousel');
  owl.owlCarousel({
      items:12,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
  clients = ()=>{
    owl.trigger('play.owl.autoplay',[3000]);
  }
  clients();
  // tab-box
  if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
//Price Range Slider
if ($( ".price_slider_wrapper" ).length) {
  $(function() {
    $( ".price_slider_wrapper" ).slider({
      range: true,
      min: 0,
      max: 150,
      values: [ 20, 70  ],
      slide: function( event, ui ) {
        $( ".price-label" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $( "#amount1" ).val(ui.values[ 0 ]);
        $( "#amount2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#price-label" ).val( "$" + $( ".price_slider_wrapper" ).slider( "values", 0 ) +
     " - $" + $( ".price_slider_wrapper" ).slider( "values", 1 ) );
  });
}
  if($('.quantity-spinner').length){
    $("input.quantity-spinner").TouchSpin({
      verticalbuttons: true
    });
  }

  // $(function() {
  //   $( ".price_slider_amount" ).slider({
  //     range: true,
  //     min: 0,
  //     max: 500,
  //     values: [ 100, 300 ],
  //     slide: function( event, ui ) {
  //       $( ".price_slider_amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  //     $( ".min_price" ).val(ui.values[ 0 ]);
  //     $( ".max_price" ).val(ui.values[ 1 ]);
  //     }
  //   });
  // $( ".price_slider_amount" ).html( "$" + $( ".price_slider_amount" ).slider( "values", 0 ) +
  //   " - $" + $( ".price_slider_amount" ).slider( "values", 1 ) );
  // });
  // if($('.price_slider_amount').length){
  //   $( ".price_slider_amount" ).slider({
  //     range: true,
  //     min: 0,
  //     max: 300,
  //     values: [ 5, 200 ],
  //     slide: function( event, ui ) {
  //     $( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
  //     }
  //   });

  //   $( "input.property-amount" ).val( $( ".price_slider_amount" ).slider( "values", 0 ) + " - $" + $( ".price_slider_amount" ).slider( "values", 1 ) );
  // }
  $(document).ready(function() {
    $('select:not(.ignore, .widget_categories select,.wp-block-categories select)').niceSelect();
  });



  /*	=========================================================================
  When document is Scrollig, do
  ========================================================================== */
  jQuery(document).on('ready', function() {
      89(function($) {
          // add your functions
          directionswitch();
      })(jQuery);
  });


  /* ==========================================================================
 When document is Scrollig, do
 ========================================================================== */

  $(window).on('scroll', function() {
      headerStyle();
  });

  /* ==========================================================================
 When document is loaded, do
 ========================================================================== */

  $(window).on('load', function() {
      $(".qty").removeAttr("size");
  });
  $(window).on('load', function() {
      handlePreloader();
      // enableMasonry();
  });





})(window.jQuery);