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
        event.preventDefault(); // Prevents the default form submission

        // Commenting out the server-side processing part but keeping the code for later
        // var formData = new FormData(event.target);
        // var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));

        // Use Fetch API to submit the form data
        // fetch('submitForm.php', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.text()) // Assuming response is plain text
        // .then(data => {
        //     var successMessage = document.getElementById('successMessage');
        //     successMessage.textContent = data; // Show the response from the server
        //     successMessage.style.display = 'block'; // Make the success message visible

        //     setTimeout(() => {
        //         contactModal.hide(); // Hide the modal
        //         successMessage.style.display = 'none'; // Hide the success message for future use
        //     }, 5000); // Adjust time as needed
        // })
        // .catch(error => console.error('Error:', error));

        // Displaying a static success message for client-side handling
        var successMessage = document.getElementById('successMessage');
        successMessage.textContent = "Thank you for your interest. We will get back to you soon!";
        successMessage.style.display = 'block'; // Make the success message visible

        setTimeout(() => {
            var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            contactModal.hide(); // Hide the modal
            successMessage.style.display = 'none'; // Hide the success message for future use
        }, 5000); // Adjust time as needed

        // Clear the form fields
        event.target.reset();
    });
});
