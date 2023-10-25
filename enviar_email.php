<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $title = $_POST["title"];
    $message = $_POST["message"];

    // Puedes personalizar el contenido del correo aquí

    $to = "comercial2@academiccontrol.com";
    $subject = "Nuevo mensaje de $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["message" => "Correo enviado con éxito"]);
    } else {
        echo json_encode(["message" => "Error al enviar el correo"]);
    }
}
?>
