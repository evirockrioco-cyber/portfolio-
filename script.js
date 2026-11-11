// ==========================================
// PERSONAL PORTFOLIO - JAVASCRIPT
// ==========================================


// ==========================================
// 1. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Toggle navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close the menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Toggle navigation"
            );

            menuToggle.textContent = "☰";

        });

    });

    // Close the menu when Escape is pressed
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Toggle navigation"
            );

            menuToggle.textContent = "☰";

        }

    });

}


// ==========================================
// 2. AUTOMATIC FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ==========================================
// 3. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent normal form submission
        event.preventDefault();

        // Check browser validation
        if (!contactForm.reportValidity()) {
            return;
        }

        // Read form values
        const name = document
            .getElementById("contact-name")
            .value
            .trim();

        const email = document
            .getElementById("contact-email")
            .value
            .trim();

        const subject = document
            .getElementById("contact-subject")
            .value
            .trim();

        const message = document
            .getElementById("contact-message")
            .value
            .trim();

        // Check for empty values
        if (!name || !email || !subject || !message) {

            formStatus.textContent =
                "Please complete all fields.";

            formStatus.classList.add("error");

            return;

        }

        // IMPORTANT: Replace this with your actual email address
        const recipient = "your-email@example.com";

        if (recipient === "your-email@example.com") {

            formStatus.textContent =
                "Please configure your email address in script.js first.";

            formStatus.classList.add("error");

            return;

        }

        // Prepare the email content
        const emailBody = [
            `Name: ${name}`,
            `Sender email: ${email}`,
            "",
            message
        ].join("\n");

        // Construct the email link
        const mailtoLink =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        // Display status
        formStatus.classList.remove("error");

        formStatus.textContent =
            "Opening your email application. Review the message and send it there.";

        // Open the visitor's email application
        window.location.href = mailtoLink;

    });

}


// ==========================================
// END OF PORTFOLIO JAVASCRIPT
// ==========================================