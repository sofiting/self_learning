<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php

    $n1 = 5;
    $n2 = 2;

    $sum = $n1 + $n2;
    echo ($sum);
    echo "<br>";

    $n2 += $n1;
    echo ($n2);
    echo "<br>";

    $resul = $n2 % $n1;
    echo ($resul);
    echo "<br>";


    $potencia = $n1 ** $n2;
    echo ($potencia);


    echo ("<br>");
    // tb &&
    if ($n1 == 5 and $n2 == 7) {
        echo "dentro de if";
    }

    echo ("<br>");
    //tb ||
    if ($n1 == 5 or $n2 == 2) {
        echo "dentro de segundo if";
    }

    echo "<br>";
    //tb ||
    if ($n1 == 5 xor $n2 == 2) {
        echo "dentro de tercer if";
    }

    echo "<br>";
    $activo = false;
    if ($activo) {
        echo "activo";
    } else {
        echo "no activo";
    }
    ?>
</body>

</html>