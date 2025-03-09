
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload

            // Get user inputs
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            // Store in localStorage (optional)
            let userData = {
                name: name,
                email: email,
                message: message
            };
            localStorage.setItem("userContactData", JSON.stringify(userData));

            // Log data to console (for testing)
            console.log("User Data:", userData);

            // Show success message
            alert("Thank you! Your message has been sent.");

            // Clear the form
            contactForm.reset();
        });
    } else {
        console.error("Form not found. Make sure the form ID is correct.");
    }
});