
const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    // e.preventDefault();

    emailjs.sendForm(
      "service_qh8qf4l",
      "template_nzmk44m",
      this
    ).then(
        alert("Message sent successfully!")
    )});