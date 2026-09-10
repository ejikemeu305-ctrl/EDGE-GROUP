/* =====================================================
   EDGE GROUP
   COMPLETE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       LOADING SCREEN
    ================================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {

        setTimeout(function () {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 700);

    });


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });


        /* Close menu after clicking a link */

        const menuLinks = navMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

            });

        });

    }


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =================================================
       SCROLL ANIMATIONS
       WORKS ON PHONE AND PC
    ================================================= */

    const animatedElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


    function showElement(element) {

        element.classList.add("active");

    }


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        showElement(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.08,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


        animatedElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        /* Backup for older phones */

        animatedElements.forEach(function (element) {

            showElement(element);

        });

    }


    /* =================================================
       BACKUP ANIMATION CHECK
       This helps if the phone browser has unusual
       IntersectionObserver behaviour.
    ================================================= */

    function checkAnimations() {

        animatedElements.forEach(function (element) {

            const rect =
                element.getBoundingClientRect();

            const screenHeight =
                window.innerHeight ||
                document.documentElement.clientHeight;

            if (
                rect.top < screenHeight * 0.92 &&
                rect.bottom > 0
            ) {

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        checkAnimations,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        checkAnimations,
        { passive: true }
    );

    setTimeout(checkAnimations, 300);


    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (formMessage) {

                    formMessage.textContent =
                        "Thank you. Your message has been received.";

                }


                contactForm.reset();

            }
        );

    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =================================================
       PREVENT HORIZONTAL PAGE MOVEMENT
    ================================================= */

    document.body.style.overflowX = "hidden";


    /* =================================================
       PAGE READY
    ================================================= */

    document.body.classList.add("page-ready");

});