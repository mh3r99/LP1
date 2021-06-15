window.addEventListener("DOMContentLoaded", () => {
  const progressBar = () => {
    let step = 1,
      lines = document.querySelectorAll(".skills__line"),
      skillsNumber = document.querySelectorAll(".skills__label span");
    let skillsRight = document.querySelector(".skills-right");

    // for (let i = 0; i < skillsNumber.length; i++) {
    //   let stopProgress = setInterval(progress, 30);
    //   skillsNumber[i].innerHTML = 0;
    //   function progress() {
    //     if (step >= skillsNumber[i].dataset.num) {
    //       clearInterval(stopProgress);
    //     } else {
    //       step++;
    //       lines[i].style.width = step + "%";
    //       skillsNumber[i].innerHTML = step;
    //     }
    //   }
    // }

    for (let i = 0; i < skillsNumber.length; i++) {
      for (let j = 0; j < lines.length; j++) {
        lines[i].style.width = skillsNumber[i].dataset.num + "%";
      }
    }

    $(skillsNumber).counterUp({
      delay: 10,
      time: 1000,
    });

    setTimeout(() => {
      skillsRight.classList.add("skills-right_top");
    }, 500);
  };

  let scrollBtn = document.querySelector(".scrollTop");
  scrollBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      progressBar();
      window.scrollY = 0;
    }

    if (document.documentElement.scrollTop > 700) {
      scrollBtn.classList.remove("scrollTop_hide");
    } else if (document.documentElement.scrollTop < 700) {
      scrollBtn.classList.add("scrollTop_hide");
    }
  });

  $(".counters__number").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });

  $(".testimonials-carousel").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
  });
});
