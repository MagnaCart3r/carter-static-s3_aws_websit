// Carter website JavaScript

console.log("Carter website JavaScript is working!");




// ===============================
// Contact form
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
        formMessage.textContent =
            "Please complete all fields before sending.";

        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Show sending status
    formMessage.textContent = "Sending your message...";
    formMessage.classList.add("show");
    try {

        // Send form data to API Gateway
        const response = await fetch(
            "https://hj5wckmmj0.execute-api.us-east-1.amazonaws.com/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        // Read API response
        const data = await response.json();

        console.log("API response:", data);

        // Check if request was successful
        if (!response.ok) {
            throw new Error(
                data.message || "Something went wrong."
            );
        }

        // Success message
        formMessage.textContent =
         "Thank you, " + name + "! Your message has been received.";

formMessage.classList.add("show");

setTimeout(() => {
    formMessage.classList.remove("show");
}, 5000);

        // Clear form
        contactForm.reset();

    } catch (error) {

        console.error(
            "Error submitting contact form:",
            error
        );

        // Error message
        formMessage.textContent =
    "Sorry, your message could not be sent. Please try again.";

formMessage.classList.add("show");
    }
});