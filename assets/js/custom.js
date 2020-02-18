(function($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function() {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });
  var toggle = false;
  // var img = document.getElementById("imgplus").src;
  const img = ["./assets/images/moon.svg", "./assets/images/sun.svg"];
  function chngimg() {
    if (toggle === false) {
      document.getElementById("imgplus").src = img[0];
      console.log("moon");
    } else {
      document.getElementById("imgplus").src = img[1];
      console.log("sun");
    }
    toggle = !toggle;
  }
  document.getElementById("imgplus").addEventListener("click", chngimg);
  var scroll = new SmoothScroll('a[href*="#"]');
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
