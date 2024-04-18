var header = document.getElementsByClassName("header");

window.onscroll = function() {
    if(window.scrollY > 0) {
        header[0].classList.add("active-header")
    } else {
        header[0].classList.remove("active-header")
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Create a FormData object, which is not used here but can be used to send data to a server
    var formData = new FormData(event.target);
  
    // Retrieve the modal instance and hide the modal
    var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    contactModal.hide();
  
    // Clear the form fields
    event.target.reset();
  });
  