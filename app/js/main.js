
window.addEventListener("DOMContentLoaded", function () {
  $(window).on('load', function () {
    $('.loader__wrap').delay(1100).fadeOut('slow');
    $("html,body").addClass("hidden");
    setTimeout(function () {
      $("html,body").removeClass("hidden");
    }, 900);
  });

  let a = 0;

  $(window).scroll(function () {
    let oTop = $('.statsbar').offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.stat__number').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-n');

        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
  });

  $(function () {
    $('.sliders').slick({
      arrows: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3800,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg" alt="arrow"></button>',
      responsive: [
        {
          breakpoint: 631,
          settings: {
            centerMode: true,
          }
        },
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
