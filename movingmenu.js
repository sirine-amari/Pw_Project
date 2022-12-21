$(document).ready(function () {
    var $topBarMenu = $("#topBarMenu"),
      $stickyMenu = $(".stickyMenu");
    $(window).scroll(function () {
      var windowScrollTop = $("html").scrollTop(),
        barTopOffset = $topBarMenu.offset().top,
        stickyHeight = $stickyMenu.height();
      if (windowScrollTop > barTopOffset) {
        if ($stickyMenu.hasClass("scrollingBar")) {
        } else {
          $stickyMenu.addClass("scrollingBar");
          $topBarMenu.css({ height: stickyHeight });
        }
      } else {
        $stickyMenu.removeClass("scrollingBar");
        $topBarMenu.css({ height: "auto" });
      }
    });
  });
  