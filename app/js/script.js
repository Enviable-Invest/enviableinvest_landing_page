$(function () {
  AOS.init();

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

  const currentYear = new Date().getFullYear();
  $("#date").text(currentYear);

  $(".faq-collpase").each(function (index, element) {
    const btn = $(element).find("button");
    const content = $(element).find("p");

    btn.on("click", function () {
      const icon = btn.find("i");

      if (icon.hasClass("fa-plus")) {
        icon.removeClass("fa-plus");
        icon.addClass("fa-times");
      } else {
        icon.removeClass("fa-times");
        icon.addClass("fa-plus");
      }

      if (content.hasClass("hidden")) {
        content.removeClass("hidden");
        content.addClass("block");
        return;
      }
      content.addClass("hidden");
      content.removeClass("block");
    });
  });
});