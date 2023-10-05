/**
* Template Name: Arsha - v2.2.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  
  
})(jQuery);


// Carousel inicio
$(".portfolio-details-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 4000,
  dots: true,
 /*  loop: true, */
  rewind: true,
  items: 1,
  onInitialized: function(e) {
    e.item.index = 0;
  }
  /* onTranslateEnd: function(e) {
    if (this.current() === this.maximum()) {
      this.reset();
      this.next();
    }
  } */
});
// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});
  
// Carousel final


// Modal inicio

// Obtén el modal y los elementos que lo abren
var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("myBtn");

// Obtén el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Objeto con información de cada sección
var sections = {
  "portfolio-description": {
    title: "¿Deseas simplificar y automatizar su proceso de gestión de solicitantes?",
    description: "Este módulo es principalmente un CRM que ayuda al proceso de admisión de estudiantes. Con este, es posible ver y gestionar a los solicitantes y aspirantes de manera centralizada, lo que facilita la tarea de seguimiento y evaluación de cada caso. Además, ofrece formatos de inscripción fáciles de usar, lo que simplifica el proceso de registro y reduce el tiempo que las asistentes, los padres y estudiantes deben invertir en completar la solicitud. Por último, permite actualizar los datos al instante, lo que garantiza que la información esté actualizada en tiempo real y que la comunicación con los padres y estudiantes sea más efectiva.",
    description2: "",
    img1: "assets/img/Fotos Academic/Administración 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Administracion 2.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Administración 3.jpg"
    
  },
  "portfolio-description2": {
    title: "¿Está buscando una manera eficiente y efectiva de gestionar la cobranza en su institución educativa? ",
    description: "Con nuestro módulo de cobranza se puede gestionar fácilmente la facturación de manera individual y global. Este módulo permite aplicar recargos y descuentos automáticos por alumno o a toda la matricula estudiantil y se puede realizar reembolsos. Además, podrá realizar pagos por lote, lo que reduce el tiempo necesario para procesar los pagos y hace que el proceso de pago sea más eficiente. También podrá ver los pagos pendientes de cada alumno y los abonos realizados por el tutor en tiempo real, lo que facilita el seguimiento y control de los pagos realizados",
    description2: "",
    img1: "assets/img/Fotos Academic/Cobranza 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Cobranza 1.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Cobranza 2.jpg"
  },
  "portfolio-description3": {
    title: "¿Buscas una solución completa y eficiente para gestionar la información de tus estudiantes?",
    description: "En este módulo se puede visualizar el plan de estudios e información detallada sobre los objetivos educativos y el contenido de cada nivel académico o grupo de estudiantes, lo que facilita la tarea de planificación y preparación de clases. Además, los maestros pueden calificar a sus estudiantes directamente en el sistema o aplicar ponderaciones específicas y como complemento se incluye una evaluación de comportamiento, que permite a los maestros hacer seguimiento de los estudiantes en el aula. Asimismo se puede establecer un calendario de eventos que gestione fácilmente las fechas importantes del ciclo escolar, lo que facilita la comunicación y coordinación entre el personal escolar, los estudiantes y los padres de familia.",
    description2: "",
    img1: "assets/img/Fotos Academic/Servicios Escoalres 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Servicios Escolares.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Servicios Escolares 2.jpg"
  },
  "portfolio-description4": {
    title: "¿Quieres tener una estrecha comunicación dentro de tu institución?",
    description: "El módulo de comunicación ofrece al personal escolar poder comunicarse de manera efectiva y eficiente con todo el plantel. Se puede enviar avisos generales y notas personalizadas a grupos específicos de estudiantes, padres de familia o profesores, enviando mensajes precisos y relevantes a las personas adecuadas. Además, el sistema cuenta con un mural escolar y una galería de fotos de fácil acceso, que se pueden utilizar para compartir logros escolares con la comunidad escolar. Es posible personalizar las plantillas de los avisos y permisos, lo que permite que la comunicación sea más atractiva y efectiva.",
    description2: "",
    img1: "assets/img/Fotos Academic/Comunicación 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Comunicacion.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Comunicacion 2.jpg"
  },
  "portfolio-description5": {
    title: "¿Quieres una forma eficiente de mejorar la experiencia de aprendizaje de tus estudiantes?",
    description: "El módulo de aula virtual es una herramienta esencial para mejorar la experiencia de aprendizaje de los estudiantes. Los maestros pueden gestionar un foro educativo en el que pueden agregar contenido de calidad para los estudiantes, fomentando la participación y el aprendizaje colaborativo. Además, el sistema de videollamadas Acamiting permite tomar clases en línea y realizar reuniones de padres y profesores en tiempo real. Los estudiantes pueden acceder a las clases desde cualquier lugar y en cualquier momento, lo que facilita el proceso de aprendizaje y la comunicación con los docentes.",
    description2: "",
    img1: "assets/img/Fotos Academic/Aula Virtual 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Aula Virtual  Alumnos.jpeg", 
    img3: "assets/img/Fotos Academic/Screen/Aula Virtual Tarea Maestros.jpeg"
  },
  "portfolio-description6": {
    title: "¿Quieres llevar un control de tus empleados?",
    description: "El módulo de recursos humanos permite llevar un registro de las asistencias, las altas y bajas de los empleados, los permisos y/o incapacidades, los datos médicos y los datos salariales de cada uno de los empleados. Con esta herramienta, los encargados pueden acceder a la información personal en línea y consultar las solicitudes de permisos o modificar la información personal de alguien en específico.",
    description2: "",
    img1: "assets/img/Fotos Academic/Recursos humanos 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Recursos Humanos Expediente de Empelado.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Recursos Humanos.jpg"
  },
  "portfolio-description7": {
    title: "¿Requieres mejorar la seguridad de tus datos?",
    description: "El módulo de seguridad garantiza que la información de la institución educativa se mantenga segura y protegida. Permite gestionar los permisos de acceso de los usuarios del sistema, asignando diferentes niveles de autorización para los maestros, padres, estudiantes, personal administrativo y cualquier otra persona que necesite utilizar el sistema, garantizando que la información solo esté disponible para aquellos que tienen los permisos apropiados, evitando que terceros no autorizados accedan a información confidencial. Además, este módulo también permite registrar el inicio de sesión de los usuarios, lo que proporciona un mayor nivel de seguridad y trazabilidad en caso de cualquier eventualidad.",
    description2: "",
    img1: "assets/img/Fotos Academic/Seguridad 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Seguridad 2.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Seguridad 3.jpg"
  },
  "portfolio-description8": {
    title: "¿Necesitas tener a la mano la información centralizada en un solo reporte?",
    description: "Con el módulo reportador permite obtener reportes de cualquier dato que se encuentre en el sistema, y además se pueden personalizar según las necesidades de cada usuario. Se pueden generar reportes en formato de gráficos, tablas, PDF, Excel, entre otros. De esta manera, los usuarios pueden obtener la información de manera rápida y eficiente, y presentarla de forma clara y visual para su análisis y toma de decisiones.",
    description2: "",
    img1: "assets/img/Fotos Academic/Reportes 1200x695.jpg",
    img2: "assets/img/Fotos Academic/Screen/Reportes.jpg", 
    img3: "assets/img/Fotos Academic/Screen/Reportes 2.jpg"
  }
  
};



// Para cada botón, agrega función de abrir modal
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Obtén el valor del atributo data-info
    var info = this.getAttribute("data-info");
    // Usa ese valor para acceder a la información correspondiente en el objeto
    var section = sections[info];
    // Actualiza el contenido del modal con la información correspondiente
    document.getElementById("modal-title").innerHTML = section.title;
    document.getElementById("modal-description").innerHTML = section.description;
    document.getElementById("modal-description2").innerHTML = section.description2;
    document.getElementById("modal-img1").src = section.img1;
    document.getElementById("modal-img2").src = section.img2;
    document.getElementById("modal-img3").src = section.img3;

        // Establece la propiedad "active" del primer elemento del carrusel en "true"
        // Inicia con la primera foto de cada section
        $(".portfolio-details-carousel").trigger('to.owl.carousel', [0, 0, true]);

    // Muestra el modal
    modal.style.display = "block";
  });
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
// limpiar modal
  document.getElementById("modal-title").innerHTML = "";
  document.getElementById("modal-description").innerHTML = "";
  document.getElementById("modal-description2").innerHTML = "";
  document.getElementById("modal-img1").src = "";
  document.getElementById("modal-img2").src = "";
  document.getElementById("modal-img3").src = "";
  resetModal();
};

// Cuando el usuario hace clic fuera del modal, ciérralo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display  = "none";
    // limpiar modal
    document.getElementById("modal-title").innerHTML = "";
    document.getElementById("modal-description").innerHTML = "";
    document.getElementById("modal-description2").innerHTML = "";
    document.getElementById("modal-img1").src = "";
    document.getElementById("modal-img2").src = "";
    document.getElementById("modal-img3").src = "";
    resetModal();
  }
};
// Fin del Modal


