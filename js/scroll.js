$("document").ready(function () {
  if (window.location.hash) {
    const elem = window.location.hash.replace("#", "");
    scroll(elem.trim());
  }

  function scroll(elem) {
    const elemList = document.querySelectorAll("[data-scroll]");

    elemList.forEach((item) => {
      if (item.dataset.scroll === elem) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    window.location.hash = elem;

    $("html,body").animate(
      {
        scrollTop: $(`[data-tag=${elem}]`).offset().top,
      },
      "fast"
    );

    $("aside").removeClass("slide-right");
  }

  $("[data-scroll=pricing]").click(function () {
    scroll("pricing");
  });
  $("[data-scroll=community]").click(function () {
    scroll("community");
  });
  $("[data-scroll=support]").click(function () {
    scroll("support");
  });
  $("[data-scroll=faq]").click(function () {
    scroll("faq");
  });
});

// AOS library init
AOS.init();
