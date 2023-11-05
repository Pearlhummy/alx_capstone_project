(function () {
    "use strict";
  
    // Navbar on scrolling
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        document.querySelector('.navbar').style.display = 'flex';
      } else {
        document.querySelector('.navbar').style.display = 'none';
      }
    });
  
    // Smooth scrolling on the navbar links
    var navbarLinks = document.querySelectorAll(".navbar-nav a");
    navbarLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          var target = document.querySelector(this.hash);
          if (target) {
            window.scroll({
              top: target.offsetTop - 45,
              behavior: "smooth"
            });
  
            // Remove the "active" class from other navbar links
            navbarLinks.forEach(function (navLink) {
              navLink.closest("a").classList.remove("active");
            });
  
            // Add the "active" class to the clicked link
            this.closest("a").classList.add("active");
          }
        }
      });
    });
  
    // Typed Initiate
    var typedTextOutput = document.querySelector('.typed-text-output');
    if (typedTextOutput) {
      var typedText = document.querySelector('.typed-text').textContent;
      var typed = new Typed(typedTextOutput, {
        strings: typedText.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
      });
    }
  
    // Scroll to Bottom
    window.addEventListener("scroll", function () {
      var scrollBtn = document.querySelector('.scroll-to-bottom');
      if (window.scrollY > 100) {
        scrollBtn.style.display = 'none';
      } else {
        scrollBtn.style.display = 'block';
      }
    });
  
    // Skills
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function (skill) {
      skill.addEventListener('waypoint', function () {
        var progressBar = skill.querySelector('.progress .progress-bar');
        progressBar.style.width = progressBar.getAttribute("aria-valuenow") + '%';
      }, { offset: '80%' });
    });
  
    // Portfolio isotope and filter
    var portfolioIsotope = new Isotope('.portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    var portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    portfolioFilters.forEach(function (filter) {
      filter.addEventListener('click', function () {
        portfolioFilters.forEach(function (item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
        portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
      });
    });
  
    // Back to top button
    window.addEventListener("scroll", function () {
      var backToTopBtn = document.querySelector('.back-to-top');
      if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    var backToTopLink = document.querySelector('.back-to-top');
    backToTopLink.addEventListener('click', function (event) {
      event.preventDefault();
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      items: 1
    });
  })();
  