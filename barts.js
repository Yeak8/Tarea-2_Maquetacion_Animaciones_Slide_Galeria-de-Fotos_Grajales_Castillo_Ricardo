$(".menu-toggle").click(function () {
    $(".menu").slideToggle();
  });

  $(function () {
    // Inicializar ResponsiveSlides.js sin los controles de navegación y pager
    $(".rslides").responsiveSlides({
      auto: true,
      speed: 500,
      timeout: 4000,
      pager: false,
      nav: false,
      pause: false,
    });

    let currentIndex = 0;
    const $slides = $(".rslides li");
    const totalSlides = $slides.length;

    function showSlide(index) {
      $slides.removeClass("active").eq(index).addClass("active");
      currentIndex = index;
    }

    $(".swiper-button-next").click(function () {
      const nextIndex = (currentIndex + 1) % totalSlides;
      showSlide(nextIndex);
    });

    $(".swiper-button-prev").click(function () {
      const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    });


    new WOW({
      boxClass: 'wow',            
      animateClass: 'animate__animated',
      offset: 100,                 
      mobile: true,                
      live: true
    }).init();
    


    window.addEventListener("scroll", function () {
      const backToTopButton = document.getElementById("backToTop");
      if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    document
      .getElementById("backToTop")
      .addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  });
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });