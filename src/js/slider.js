$('.news-cards').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  mobileFirst: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick"
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
