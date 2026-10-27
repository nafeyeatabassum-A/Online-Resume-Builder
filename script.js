// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close Menu
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body =
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message;

    document.getElementById("form-note").textContent =
        "Thank you! Opening email...";

    window.location.href =
        "mailto:nafeyea.tabassum@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
});