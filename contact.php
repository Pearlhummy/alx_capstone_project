<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Customize these variables
    $to = "igbinladepelumi@gmail.com"; // Your email address
    $headers = "From: $email";
    $mail_subject = "New contact form submission: $subject";
    $message_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send the email
    if (mail($to, $mail_subject, $message_body, $headers)) {
        // Email sent successfully
        echo "Thank you! Your message has been sent.";
    } else {
        // Email sending failed
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
