$(function () {
  // ------------------- start first screen slide--------------------/

  $(".leftname, .rightinfo").hover(
    function () {
      $(".rightname").css({
        transform: "translateY(-100%)",
      });
      $(".rightinfo").css({
        transform: "translateY(0%)",
      });
    },
    function () {
      $(".rightname").css({
        transform: "translateY(0%)",
      });
      $(".rightinfo").css({
        transform: "translateY(100%)",
      });
    }
  );

  $(".rightname, .leftinfo").hover(
    function () {
      $(".leftname").css({
        transform: "translateY(-100%)",
      });
      $(".leftinfo").css({
        transform: "translateY(0%)",
      });
    },
    function () {
      $(".leftname").css({
        transform: "translateY(0%)",
      });
      $(".leftinfo").css({
        transform: "translateY(100%)",
      });
    }
  );

  // ---------------------- end first screen slide-----------------------/


  //  -------------- start padding on main screen -----------------------/

  let windowWidth = $(window).width(),
    containerWidth = $(".container").width(),
    sideWidth = (windowWidth - containerWidth) / 2;

  $(".rightinfo").css("padding-right", sideWidth + 30 + "px");
  $(".leftinfo").css("padding-left", sideWidth + 30 + "px");
  if ($(window).width() < 992) {
    $(".slider").css("padding-left", sideWidth + "px");
    $(".cards").css("padding-left", sideWidth + "px");
  } else {
    $(".slider").css("padding-left", 0 + "px");
    $(".cards").css("padding-left", 0 + "px");
  }
  if ($(window).width() < 768) {
    $(".comments").css("padding-left", sideWidth + "px");
  } else {
    $(".comments").css("padding-left", 0 + "px");
  }


  $(window).resize(function () {
    let windowWidth = $(window).width(),
      containerWidth = $(".container").width(),
      sideWidth = (windowWidth - containerWidth) / 2;

    $(".rightinfo").css("padding-right", sideWidth + 30 + "px");
    $(".leftinfo").css("padding-left", sideWidth + 30 + "px");
    if ($(window).width() < 992) {
      $(".slider").css("padding-left", sideWidth + "px");
      $(".cards").css("padding-left", sideWidth + "px");
    } else {
      $(".slider").css("padding-left", 0 + "px");
      $(".cards").css("padding-left", 0 + "px");
    }
    if ($(window).width() < 768) {
      $(".comments").css("padding-left", sideWidth + "px");
    } else {
      $(".comments").css("padding-left", 0 + "px");
    }
  });

  // -------------- end padding on main screen ----------------/


  // -----------------------start section slider ----------------------------/

  $(".slider__inner").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 1700,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  // -----------------------end section slider ----------------------------/



  // ---------------- startsection partners -------------------------------/


  $(document).ready(function () {
    $slides = $('.slides');
    $slides.bind('contentchanged', function () {
      animate($slides);
    });
    animate($slides);
  });

  function animate($slides) {
    var slidesLength = $slides.find('li').length;
    if (slidesLength > 3) {
      $slides.find('li:nth-last-child(-n+3)').clone().prependTo($slides);
      $slides.addClass('animate');
      $slides.css('animation-duration', slidesLength * 4 + 's');
    }
  }


  // ---------------- end startsection partners -------------------------------/



  // -----------------------start section comments----------------------------/

  $(".comments__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    // autoplay: true,
    // autoplaySpeed: 1700,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: false,
        }
      }
    ]
  });


  // -----------------------end section comments ----------------------------/

  // ------- start coments show --------- //
  $(window).on('load', function () {
    $('.comments__item-content').each(function () {
      let contentheight = $(this).find(".comments__item-dropdown").height();
      if (contentheight >= 345) {
        $(this).addClass('bigcontent');
      }
    });
  });

  $('.comments__item-content').on("click", function () {
    let contentheight = $(this).find(".comments__item-dropdown").height();

    if ($(this).hasClass("active")) {
      $(this)
        .animate(
          {
            height: contentheight + 30,
          },
          200
        )
        .removeClass("active");
    } else {
      $(this)
        .animate(
          {
            height: 340,
          },
          200
        )
        .addClass("active");
    }
  });

  // ------- end coments show --------- //


  //  -------------- start mobile menu ----------------------/

  $('.burger-btn').on('click', function () {
    $('.mobile__menu').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.mobile__dropdown').on('click', function () {
    $(this).toggleClass('active');
    $(this).find('.mobile__dropdown-list').slideToggle();
  });

  //  -------------- end mobile menu ----------------------/

  // -----------------------start cards comments----------------------------/

  $(".cards__slider").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 800,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 1700,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });


  // ----------------------- end cards  section  ----------------------------/

  // -----------------------start gallery comments----------------------------/

  $(".gallery__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 1700,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  // ----------------------- end gallery  section  ----------------------------/





  //  -------------- start video player ----------------------//
  const players = Plyr.setup('.js-player');
  $('.btn-close').on('click', function () {
    players.forEach(function (player) {
      player.stop();
    });
  });
  //  -------------- end video player ----------------------//



  // ----------- start block messange show -------------------//

  function showbox() {
    $('.messangersbox').css({
      transform: "translateX(0%)",
      opacity: '1',
    });
  };
  setTimeout(showbox, 3500);

  // ----------- end block messange show -------------------//



});


