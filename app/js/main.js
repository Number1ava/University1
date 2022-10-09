
window.addEventListener("DOMContentLoaded", function () {
  $(window).on('load', function () {
    $('.loader__wrap').delay(1100).fadeOut('slow');
    $("html,body").addClass("hidden");
    setTimeout(function () {
      $("html,body").removeClass("hidden");
    }, 900);
  });


  $(function () {
    let show = true;
    let countbox = ".counter";
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      let w_top = $(window).scrollTop();
      let e_top = $(countbox).offset().top;
      let w_height = $(window).height();
      let d_height = $(document).height();
      let e_height = $(countbox).outerHeight();
      if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.stat__number').spincrement({
          thousandSeparator: "",
          duration: 4000
        });
        show = false;

      }
    });
  });

  // let a = 0;

  // $(window).scroll(function () {
  //   let oTop = $('.statsbar').offset().top - window.innerHeight;

  //   if (a == 0 && $(window).scrollTop() > oTop) {
  //     $('.stat__number').each(function () {
  //       let $this = $(this),
  //         countTo = $this.attr('data-n');

  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //         countNum: countTo
  //       }, {
  //         duration: 2000,
  //         easing: 'swing',
  //         step: function () {
  //           $this.text(Math.floor(this.countNum));
  //         },
  //         complete: function () {
  //           $this.text(this.countNum);
  //         }
  //       });
  //     });
  //     a = 1;
  //   }
  // });


  $(function () {
    $('.sliders').slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="arrow"></button>',
      responsive: [
        {
          breakpoint: 1145,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 881,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 631,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger__menu-button");
    let overlay = menu.find('.burger__menu-overlay');
    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
      menu.toggleClass('burger__menu-active');
      if (menu.hasClass('burger__menu-active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  burgerMenu(".burger__menu");

  document
    .querySelectorAll('.lang button')
    .forEach((b) => b.addEventListener('click', setLang));

  function setLang() {
    for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[key][this.value];
      }
    }
  }
});
