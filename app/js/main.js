
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
      console.log($(this).scrollTop());
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
          breakpoint: 630,
          settings: {
            centerMode: true,
          }
        },
      ]
    });
  });
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
  document
    .querySelectorAll('.lang button')
    .forEach((b) => b.addEventListener('click', setLang));

  function setLang() {
    for (let key in langArr2) {
      let elem2 = document.querySelector('.lng2-' + key);
      if (elem2) {
        elem2.innerHTML = langArr2[key][this.value];
      }
    }
  }
});
