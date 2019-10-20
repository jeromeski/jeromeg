jQuery(function($) {
  function homeInit() {
    $(document).ready(function() {
      // blast h1
      var chars = $(".hero__left h1").blast({
        delimiter: "character",
        // tag: "span"
      });

      $(".hero__left h1").css("opacity", 1);

      i = 0;
      chars.each(function() {
        if (i == 400) {
          i = 500;
        }

        if (i == 1200) {
          i = 1300;
        }

        var el = $(this);

        if (i == 500) {
          setTimeout(function() {
            $(".hero__left h1 img").addClass("animated rotateIn");
          }, 600);
        }

        setTimeout(function() {
          el.addClass("animated bounceIn");
        }, i);

        if (i < 1200) {
          i = i + 100;
        } else {
          i = i + 70;
        }
      });

      // hover animation
      setTimeout(function() {
        $(".hero__left .blast").removeClass("animated bounceIn");
        $(".hero__left img").removeClass("animated rotateIn");
        $(".hero__left .blast").css("opacity", 1);
        $(".hero__left img").css("opacity", 1);

        $(".hero__left .blast").mouseenter(function() {
          var el = $(this);

          $(this).addClass("animated rubberBand");
          $(
            this
          ).one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function() {
              el.removeClass("animated rubberBand");
            }
          );
        });

        $(".hero__left img").mouseenter(function() {
          var el = $(this);

          $(this).addClass("animated rubberBand");
          $(
            this
          ).one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function() {
              el.removeClass("animated rubberBand");
            }
          );
        });
      }, 3000);

      setTimeout(function() {
        $(".hero__left .hero__social-icon").addClass("animated bounceIn");
        $(
          ".hero__left .hero__social-icon"
        ).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            $(".hero__left .hero__social-icon").removeClass("animated bounceIn");
            $(".hero__left .hero__social-icon").css("opacity", 1);
          }
        );
      }, 4500);

      $(".hero__left .hero__social-icon").mouseenter(function() {
        var el = $(this);

        $(this).addClass("animated rubberBand");
        $(
          this
        ).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            el.removeClass("animated rubberBand");
          }
        );
      });
    });

    $(".btn-primary").click(function(){
      $(".collapse").collapse('toggle');
    });
  }
  homeInit();
});

