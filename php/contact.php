<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Validate form data
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Please fill out all fields.";
        return;
    }

    // Compose the email
    $to = "igbinladepelumi@gmail.com";  // Replace with the recipient's email
    $subject = $subject;
    $message = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "An error occurred while sending the email.";
    }
}
?>
