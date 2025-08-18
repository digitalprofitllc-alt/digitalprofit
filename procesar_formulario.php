<?php
// procesar_formulario.php

// Configuración
$destinatario = "digital.profit.llc@gmail.com";
$asunto = "Nuevo mensaje desde Digital Profit Advisors";

// Verificar que se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $mensaje = trim($_POST['mensaje']);

    // Validar campos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        die("<p style='color: red; text-align: center; font-family: Poppins, sans-serif;'>
                ❌ Todos los campos son obligatorios.</p>
             <p><a href='javascript:history.back()'>Volver</a></p>");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("<p style='color: red; text-align: center; font-family: Poppins, sans-serif;'>
                ❌ El correo no es válido.</p>
             <p><a href='javascript:history.back()'>Volver</a></p>");
    }

    // Formato del mensaje
    $cuerpo = "
    <html>
    <head>
        <title>Nuevo mensaje de contacto</title>
    </head>
    <body style='font-family: Poppins, sans-serif; color: #333; background: #f9f9f9; padding: 20px;'>
        <div style='max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);'>
            <h2 style='color: #E50000;'>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($mensaje)) . "</p>
            <hr>
            <p><small>Este mensaje fue enviado desde la página web de <strong>Digital Profit Advisors</strong> el " . date('d/m/Y H:i:s') . ".</small></p>
        </div>
    </body>
    </html>
    ";

    // Encabezados
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $nombre <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Enviar correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        // Éxito
        echo "
        <div style='text-align: center; font-family: Poppins, sans-serif; color: #4CAF50; padding: 40px; background: #f0fff0; border-radius: 10px; max-width: 600px; margin: 50px auto;'>
            <h2>✅ ¡Gracias, $nombre!</h2>
            <p>Tu mensaje fue enviado con éxito. Nos contactaremos contigo en breve.</p>
            <p><a href='index.html' style='color: #E50000; text-decoration: none; font-weight: 600;'>Volver al inicio</a></p>
        </div>";
    } else {
        // Error
        echo "
        <div style='text-align: center; font-family: Poppins, sans-serif; color: #f44336; padding: 40px; background: #fff0f0; border-radius: 10px; max-width: 600px; margin: 50px auto;'>
            <h2>❌ Error al enviar</h2>
            <p>No se pudo enviar tu mensaje. Por favor, inténtalo más tarde o escríbenos directamente por WhatsApp.</p>
            <p><a href='index.html' style='color: #E50000; text-decoration: none;'>Volver al inicio</a></p>
        </div>";
    }
} else {
    // Acceso directo no permitido
    header("Location: index.html");
    exit();
}
?>