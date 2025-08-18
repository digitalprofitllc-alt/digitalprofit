<?php
// test_madurez.php

$resultado = null;
$mensaje = '';
$nivel = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $p1 = (int)($_POST['p1'] ?? 0);
    $p2 = (int)($_POST['p2'] ?? 0);
    $p3 = (int)($_POST['p3'] ?? 0);
    $p4 = (int)($_POST['p4'] ?? 0);
    $p5 = (int)($_POST['p5'] ?? 0);

    $puntaje = $p1 + $p2 + $p3 + $p4 + $p5;
    $total = 25; // Máximo 5 preguntas x 5 puntos
    $porcentaje = ($puntaje / $total) * 100;

    if ($porcentaje < 40) {
        $nivel = "Bajo";
        $color = "#E50000";
        $mensaje = "
        <p>Tu nivel de madurez digital es <strong> bajo</strong>. Es momento de comenzar tu transformación.</p>
        <p>Recomendamos una <strong>evaluación estratégica gratuita</strong> para identificar oportunidades clave en automatización, experiencia del cliente y certificación 4.0.</p>";
    } elseif ($porcentaje < 70) {
        $nivel = "Medio";
        $color = "#FF8C00";
        $mensaje = "
        <p>Tienes una base digital <strong>media</strong>. Puedes escalar rápidamente con estrategias de IA y automatización.</p>
        <p>Sugiero implementar <strong>chatbots con Botmaker</strong> y optimizar procesos con RPA para aumentar eficiencia y ventas.</p>";
    } else {
        $nivel = "Alto";
        $color = "#4CAF50";
        $mensaje = "
        <p>Felicitaciones, tienes un nivel de madurez digital <strong>alto</strong>.</p>
        <p>Para mantener tu ventaja competitiva, te recomendamos una <strong>certificación CERTIMIND</strong> y avanzar en análisis predictivo con IA.</p>";
    }

    $resultado = [
        'puntaje' => $puntaje,
        'porcentaje' => round($porcentaje),
        'nivel' => $nivel,
        'color' => $color,
        'mensaje' => $mensaje
    ];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test de Madurez Digital | Digital Profit Advisors</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .test-container {
            max-width: 800px;
            margin: 100px auto;
            background: #111;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .test-container h2 {
            color: #E50000;
            text-align: center;
            margin-bottom: 30px;
        }
        .pregunta {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #333;
        }
        .pregunta label {
            display: block;
            margin-bottom: 10px;
            font-weight: 500;
            color: #fff;
        }
        .opciones {
            display: grid;
            gap: 10px;
        }
        .opciones label {
            background: #222;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        }
        .opciones label:hover {
            background: #333;
            transform: translateX(5px);
        }
        .btn-test {
            background: #E50000;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            display: block;
            margin: 30px auto;
            transition: 0.3s;
        }
        .btn-test:hover {
            background: #c00;
            transform: translateY(-3px);
        }
        .resultado {
            text-align: center;
            padding: 30px;
            border-radius: 10px;
            margin: 30px 0;
            background: rgba(229, 0, 0, 0.1);
            border: 1px solid #E50000;
        }
        .resultado h3 {
            color: <?php echo $resultado['color'] ?? '#E50000'; ?>;
        }
    </style>
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html"><img src="assets/logo.png" alt="Logo" class="nav-logo"></a>
            <ul class="nav-menu">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index.html#servicios">Servicios</a></li>
                <li><a href="index.html#contacto">Contacto</a></li>
            </ul>
            <div class="language-switch">
                <a href="test_madurez-en.php" class="lang-en">EN</a>
            </div>
        </div>
    </nav>

    <div class="test-container">
        <h2>¿Qué tan listo está tu negocio para la Industria 4.0?</h2>

        <?php if ($resultado): ?>
            <div class="resultado">
                <h3>Nivel: <?php echo $resultado['nivel']; ?></h3>
                <p><strong>Puntaje:</strong> <?php echo $resultado['puntaje']; ?> de 25</p>
                <p><strong>Porcentaje:</strong> <?php echo $resultado['porcentaje']; ?>%</p>
                <?php echo $resultado['mensaje']; ?>
                <a href="https://wa.me/50672727250" class="btn-primary" style="margin-top: 20px; display: inline-block;">Agenda tu diagnóstico gratuito</a>
            </div>
        <?php else: ?>
            <form method="POST" action="">
                <div class="pregunta">
                    <label>1. ¿Automatiza tareas repetitivas (atención, ventas, seguimiento)?</label>
                    <div class="opciones">
                        <label><input type="radio" name="p1" value="1" required> No, todo es manual</label>
                        <label><input type="radio" name="p1" value="3"> Algunas tareas</label>
                        <label><input type="radio" name="p1" value="5"> Sí, con chatbots o RPA</label>
                    </div>
                </div>

                <div class="pregunta">
                    <label>2. ¿Usa IA o chatbots para atender clientes 24/7?</label>
                    <div class="opciones">
                        <label><input type="radio" name="p2" value="1" required> No</label>
                        <label><input type="radio" name="p2" value="3"> Estamos explorando</label>
                        <label><input type="radio" name="p2" value="5"> Sí, con Botmaker u otra plataforma</label>
                    </div>
                </div>

                <div class="pregunta">
                    <label>3. ¿Tiene un CRM o sistema para gestionar clientes?</label>
                    <div class="opciones">
                        <label><input type="radio" name="p3" value="1" required> No, usamos hojas de cálculo</label>
                        <label><input type="radio" name="p3" value="3"> Sí, pero no está integrado</label>
                        <label><input type="radio" name="p3" value="5"> Sí, y está automatizado</label>
                    </div>
                </div>

                <div class="pregunta">
                    <label>4. ¿Ha evaluado su nivel de madurez digital (ej. CERTIMIND)?</label>
                    <div class="opciones">
                        <label><input type="radio" name="p4" value="1" required> No</label>
                        <label><input type="radio" name="p4" value="3"> Sí, internamente</label>
                        <label><input type="radio" name="p4" value="5"> Sí, con certificación oficial</label>
                    </div>
                </div>

                <div class="pregunta">
                    <label>5. ¿Su equipo está capacitado en herramientas digitales y IA?</label>
                    <div class="opciones">
                        <label><input type="radio" name="p5" value="1" required> No</label>
                        <label><input type="radio" name="p5" value="3"> Algunos miembros</label>
                        <label><input type="radio" name="p5" value="5"> Sí, todos están alineados</label>
                    </div>
                </div>

                <button type="submit" class="btn-test">Ver Resultado</button>
            </form>
        <?php endif; ?>
    </div>

</body>
</html>