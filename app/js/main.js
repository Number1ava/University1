
window.addEventListener("DOMContentLoaded", function () {

  $(function () {
    let fx = function fx() {
      let dfd = $(".stat__number").map(function (i, el) {
        let data = parseInt(this.dataset.n, 10);
        let props = {
          "from": {
            "count": 0
          },
          "to": {
            "count": data
          }
        };
        return $(props.from).animate(props.to, {
          duration: 2000 * 1,
          step: function (now) {
            $(el).text(Math.ceil(now));
          },
          complete: function () {
            if (el.dataset.sym !== undefined) {
              el.textContent = el.textContent.concat(el.dataset.sym)
            }
          }
        }).promise();
      }).toArray();
      // return jQuery promise when all animations complete
      return $.when.apply($, dfd);
    };

    let reset = function reset() {
      // console.log($(this).scrollTop());
      // do stuff when window `.scrollTop()` > 75
      if ($(this).scrollTop() > 75) {

        $(this).off("scroll");
        fx()
      }
    };
    $(window).on("scroll", reset);

  });


  $(function () {
    $('.sliders').slick({
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
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
