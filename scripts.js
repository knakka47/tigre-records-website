document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementsByClassName("header")[0];

    window.onscroll = function () {
        if (window.scrollY > 0) {
            header.classList.add("active-header");
        } else {
            header.classList.remove("active-header");
        }
    };

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(event.target);
        var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));

        // Use Fetch API to submit the form data to Web3Forms
        fetch(event.target.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Assuming response is JSON
        .then(data => {
            var successMessage = document.getElementById('successMessage');
            successMessage.textContent = "Thank you for your interest in booking studio time! We will get back to you soon!";
            successMessage.style.display = 'block'; // Make the success message visible

            setTimeout(() => {
                contactModal.hide(); // Hide the modal
                successMessage.style.display = 'none'; // Hide the success message for future use
            }, 5000); // Adjust time as needed

            // Clear the form fields
            event.target.reset();
        })
        .catch(error => console.error('Error:', error));
    });
});
