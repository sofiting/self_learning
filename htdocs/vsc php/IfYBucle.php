<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php

    $nota1 = 7;
    $nota2 = 8;
    $nota3 = 5;

    if ($nota1 >= 5) {
        echo "Nota 1 aprobado";
    }

    echo "<br>";

    if ($nota2 != 0) :
        echo "La nota 2 no es 0";

    endif;

    echo "<br>";

    if ($nota3 == 5) {
        echo "Dentro de primer if";
        echo "<br>";
        if ($nota2 < 9) {
            echo "Dentro de segundo if";
        }
    }

    echo "<br>";

    if ($nota1 >= 5 and $nota2 >= 5) {
        echo "Curso aprobado";
    }

    echo "<br>";

    $final  = $nota1 >= 5 ? "aprobado" : "suspenso";
    echo "Nota $nota1: " . $final;

    echo "<br>";

    if ($nota1 > $nota2) {
        echo "nota 1 > nota 2";
    } elseif ($nota1 == $nota2) {
        echo "nota 1 igual a la nota 2";
    } elseif ($nota2 > $nota1) {
        echo "nota 2 > nota 1";
    } else {
        echo "se ha producido algún error";
    }

    echo "<br>";

    $dia = 2;
    switch ($dia) {
        case 1:
            echo "cita médico";
            break;
        case 2:
            echo "invitación de hermana";
            break;
        case 3:
            echo "pagar aluqiler";
            break;
        default:
            echo "ningún evento";
    }

    echo "<br>";

    $num = 5;

    for ($i = 1; $i <= $num; $i++) {
        if ($i % 2 == 0) {
            echo $i . " ha tocado el premio";
            echo "<br>";
        }
        echo "hola " . $i;
        echo "<br>";
    }

    for ($j = $num; $j > 0; $j--) {
        if ($j % 2 == 0) {
            echo $j . " ha conseguido lotería";
            echo "<br>";
        }
        echo "adios ", $j;
        echo "<br>";
    }

    $array = ["sofia", "juan", "sonia", "dania"];
    $array2 = ["sofia" => "susi", "juan" => "nana", "sonia" => "cindy", "dania" => "lolo"];
    foreach ($array as $valor) {
        echo $valor;
        echo "<br>";
    }

    foreach ($array2 as $k => $v) {
        echo "$k => $v";
        echo "<br>";
    }

    $cont = 0;

    while ($cont < 5) {
        echo "sofia " . $cont;
        $cont++;
        echo "<br>";
    }

    do {
        echo "i'm do while";
        echo "<br>";
        echo "sofia " . $cont;
        $cont++;
        echo "<br>";
    } while ($cont < 5);


    for ($i = 0; $i < 5; $i++) {
        if ($i == 3) {
            //sirve para saltar un paso.
            continue;
        }
        echo $i;
        echo "<br>";
    }

    ?>
</body>

</html>