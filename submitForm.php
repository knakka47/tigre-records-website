<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $emailAddress = $_POST['emailAddress'];
    $message = $_POST['message'];
    
    $to = 'kiritnakka2@gmail.com';
    $subject = 'New Studio Booking Request';
    $body = "A new booking request has been submitted:\n\n" .
            "Full Name: $fullName\n" .
            "Email Address: $emailAddress\n" .
            "Message: $message";
    
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: webmaster@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $body, $headers);
    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you for your interest. We will get back to you soon!";
    } else {
        echo "Mail sending failed.";
    }
    
}
?>
