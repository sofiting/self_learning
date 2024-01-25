<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <a href="destino.php?nombre=sofia&cargo=Profesor">pasa las variables a destino php </a>
    <?php
    echo "<br>";
    $age = 39;
    $tall = 1.67;
    $name = "sofia";
    $frase = "sofia has $age years old";
    $teather = false;

    echo "Your name is " . $name . " you have $age years old";
    echo "<br>";
    echo $tall;
    echo "<br>";
    // si imprimo directamente valor false, no sale nada
    echo json_encode($teather);
    echo "<br>";
    echo 'Hello World!';

    $v1 = 20;
    $v2 = 10;

    function prueba()
    {
        $valor = 10;
        echo $valor;
    }

    //variable global
    function prueba2()
    {
        global $v1, $v2;
        $v3 = $v1 + $v2;
        echo $v3;
    }

    echo "<br>";
    prueba();
    echo "<br>";
    prueba2();
    echo "<br>";

    //variable predefinida
    $numero = 3;
    echo "Nombre del servidor " . $_SERVER['SERVER_NAME'];
    echo "<br>";
    echo "Software del servidor " . $_SERVER['SERVER_SOFTWARE'];
    echo "<br>";
    echo "Puerto del servidor " . $_SERVER['SERVER_PORT'];
    echo "<br>";
    echo "La variable número es " . $GLOBALS['numero'];
    echo "<br>";

    //constantes
    const PI = 3.1415692;
    echo PI;
    echo "<br>";
    define("nombre", "sofia");
    echo nombre;

    //pasa variable por url linea 11 de este php


    ?>
</body>

</html>