$(function () {
  function onNavbarTogge() {
    if ($("#collapse-nav").hasClass("hidden")) {
      $("#collapse-nav").removeClass("hidden");
      $("#collapse-nav").addClass("flex");

      return;
    }
    $("#collapse-nav").addClass("hidden");
    $("#collapse-nav").removeClass("flex");
  }

  $("#navbar-toggle").on("click", onNavbarTogge);

  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // Set the speed for auto play in milliseconds
    dots: true, // Add navigation dots
    responsive: [
      {
        breakpoint: 768, // Define the breakpoint for smaller devices
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Define the breakpoint for smaller devices
        settings: {
          slidesToShow: 1, // Show 2 slides on smaller devices
          slidesToScroll: 1,
        },
      },
      // Add more responsive settings as needed
    ],
  });

  const currentYear = new Date().getFullYear();

  $("#date").text(currentYear);
});
