$(document).ready(function(){
	$('.carousel__inner').slick(
		{
			speed: 500,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"> <img src="img/prev_arrow.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/next_arrow.svg"></button>',
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
						arrows: false,
						adaptiveHeight: false
					}
				}
			]
		}
	)
  });
	
