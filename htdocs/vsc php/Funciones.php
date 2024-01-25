<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php

    function suma($n1, $n2)
    {
        return $n1 + $n2;
    }

    //valor
    function miFuncion($n1)
    {
        $n1 += 2;
    }

    //referencia
    function otraFuncion(&$n1)
    {
        $n1 += 2;
    }

    function factorial($n)
    {
        if ($n == 1) {
            return 1;
        } else {
            echo $n . " x ";
            return $n * factorial($n - 1);
        }
    }
    $numero = 4;

    echo suma(3, 5);
    echo "<br>";

    miFuncion($numero);
    echo $numero;

    echo "<br>";

    otraFuncion($numero);
    echo $numero;

    echo "<br>";

    //pasa por valor, hace una copia, si lo hago 
    //alguna operacion con esa copia , no afecta
    //el valor original ; en caso de por referencia
    // si afecta al valor original 

    //recursividad
    echo factorial(4);
    ?>
</body>

</html>