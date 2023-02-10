$(document).ready(function(){
    $(".test__swiper-wrapper").slick({
      prevArrow: '.test__swiper-button-prev',
      nextArrow: '.test__swiper-button-next',
      
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1531,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 855,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 806,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 455,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 360,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }

      ]
      
    })
  
  })