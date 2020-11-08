$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up").addClass("show");
    } else {
      $(".scroll-up").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

//typing animation script
var typed = new Typed(".typing", {
  strings: ["Frontend Web Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: [, "nice to meet you"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
