"use strict"; 
$("body").on("kaydenLoaded", function () { 
    $(".grid").masonry({ itemSelector: ".grid-item" }); 
    AOS.init({ once: true }); 
    $(".tmcounter").each(function () { 
        $(this).appear(function () { 
            $(this).countTo() }) }); 
            $(".progress-bar-loadAnimation").each(function () { 
                $(this).appear(function () { 
                    $(this).css({ width: $(this).data("percent") + "%" })})});
                      $(window).on("scroll", function () { 
                          transparent_header() }); 
                          $(".portfolio-image").magnificPopup({ type: "image", closeOnContentClick: true, gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } }); $(".iframe_popup").magnificPopup({ type: "iframe", closeBtnInside: false, iframe: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>', patterns: { youtube: { index: "youtube.com/", id: "v=", src: "https://www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } }, srcAction: "iframe_src", } }); $("#client_slider").owlCarousel({ items: 1, loop: true, autoplay: true, autoplayTimeout: 4000, dots: true, autoplayHoverPause: true, autoplaySpeed: 1000, navSpeed: 500, dotsSpeed: 500, dragEndSpeed: 500 }); var a = new Typed(".typed_text", { strings: $(".typed_text").data("options").split(","), typeSpeed: 90, backDelay: 2000, backSpeed: 40, loop: true }); $('a.scrollspy[href^="#"]:not([href="#"]').on("click", function (c) { var b = $(this); var d = parseInt($("body").data("offset")); $("html, body").stop().animate({ scrollTop: ($(b.attr("href")).offset().top) - (d - 1) }, 1500, "easeInOutExpo"); c.preventDefault() }); $(window).scroll(function () { if ($(this).scrollTop() >= 350) { $("#return-to-top").fadeIn(200) } else { $("#return-to-top").fadeOut(200) } }); $("#return-to-top").on("click", function () { event.preventDefault(); $("body,html").animate({ scrollTop: 0 }, 1500, "easeInOutExpo") }) });