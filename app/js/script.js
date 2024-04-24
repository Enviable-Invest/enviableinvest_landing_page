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

  // function onCommingSoonModaltoggle() {
  //   if ($("#commingsoon").hasClass("hidden")) {
  //     $("#commingsoon").removeClass("hidden");
  //     $("#commingsoon").addClass("grid");
  //     return;
  //   }
  //   $("#commingsoon").addClass("hidden");
  //   $("#commingsoon").removeClass("grid");
  // }

  // $("button#togglecs").on("click", onCommingSoonModaltoggle);

  $("#navbar-toggle").on("click", onNavbarTogge);

  const currentYear = new Date().getFullYear();
  $("#date").text(currentYear);

  $(".faq-collpase").click(function (e) {
    e.preventDefault();
    let content = $(this).find("#content");
    let icon = $(this).find("i");

    if (content.hasClass("hidden")) {
      content.removeClass("hidden");
      content.addClass("block");
      icon.addClass("fa-minus");
      icon.removeClass("fa-plus");
      return;
    }

    content.addClass("hidden");
    content.removeClass("block");
    icon.removeClass("fa-minus");
    icon.addClass("fa-plus");
  });
});
