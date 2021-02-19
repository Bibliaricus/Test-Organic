$(document).ready(function(){
  // Main banner slider (slick slider)
  $('.main-banner-slider').slick({
    arrows: true,
    dots: true
  });

  // Quick view popup (Magnifick popup)
  $('.quick-view-btn').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
	});

  // Quantity of products in quick view popup
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity__minus");
    var $quantityArrowPlus = $(".quantity__plus");
    var $quantityNum = $(".quantity__number-input");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

  //  Slider in quick view popup (slick slider)
  $( '.quick-view-btn' ).on( 'click', function(e){
    $('.q-view-popup__image-slider').slick({
      arrows: true,
      dots: true
    });
    $('.q-view-popup__image-slider').slick('resize');
    console.log('+');
  });    

  // Hot product slider (max-widht: 1200px) (Slick slider)
  $('.hot-products__slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Popup for mobile menu (Magnific popup)
  $('.mobile-menu-humburger').magnificPopup({
    type:'inline',
    midClick: true,
    mainClass: 'mfp-anima',
    removalDelay: 300,
    preloader: false
  });
    
});