// ============================================
// MOBILE NAVIGATION
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ============================================
// STICKY HEADER
// ============================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        header.style.background = "rgba(250,248,244,.97)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(250,248,244,.92)";

    }

});


// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 85,

            behavior: "smooth"

        });

    });

});


// ============================================
// ACTIVE NAVIGATION
// ============================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ============================================
// FAQ ACCORDION
// ============================================

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        const icon = button.querySelector("i");

        document.querySelectorAll(".faq-content").forEach(item => {

            if (item !== content) {

                item.style.display = "none";

            }

        });

        document.querySelectorAll(".faq-btn i").forEach(i => {

            if (i !== icon) {

                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");

            }

        });

        if (content.style.display === "block") {

            content.style.display = "none";

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        } else {

            content.style.display = "block";

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});


// ============================================
// BOOKING FORM
// ============================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your booking request has been received.");

        bookingForm.reset();

    });

}


// ============================================
// GALLERY LIGHTBOX
// ============================================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `<img src="" alt="">`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImage.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements = document.querySelectorAll(

    ".experience-card, .pricing-card, .travel-card, .testimonial-card, .social-card, .gallery-item"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => observer.observe(item));


// ============================================
// HERO FADE EFFECT
// ============================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    if (hero) {

        hero.style.backgroundPositionY = value * 0.35 + "px";

    }

});