<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php

    //arrays indexados
    $dia = array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");

    $numeros = array(10, 20, 30, 40);
    $valores = [10, 20, 30, 40];

    //tamaño 10
    $nombres = array(10);
    //array vacio
    $ar = array();

    echo $dia[3];
    echo "<br>";
    var_dump($dia);
    echo "<br>";
    var_dump($numeros);
    echo "<br>";
    echo "<br>";

    //arrays asociados key value

    $navegadores = array("navegador1" => "Chrome", "navegador2" => "Firefox", "navegador3" => "Microsofr Edge");
    $datos = ["nombre" => "sofia", "edad" => 23, "profesor" => true, 3 => 100];

    echo "Navegador 3: " . $navegadores["navegador3"];
    echo "<br>";
    echo "Nombre: " . $datos["nombre"];
    echo "<br>";
    echo "Datos 3: " . $datos[3];
    echo "<br>";
    var_dump($navegadores);
    echo "<br>";
    var_dump($datos);

    echo "<br>";
    echo "<br>";

    //comparar arrays
    $numeros1 = [11, 22, 33, 44, 99];
    $numeros2 = [11, 88, 33, 55, 77];

    $colores1 = ["color1" => "rojo", "color2" => "rosa", "color3" => "azul"];
    $colores2 = ["color1" => "verde", "color2" => "blanco", "color3" => "azul"];

    $diferencia1 = array_diff($numeros1, $numeros2);
    $diferencia2 = array_diff($colores1, $colores2);

    var_dump($diferencia1);
    echo "<br>";
    var_dump($diferencia2);
    echo "<br>";
    echo "<br>";

    //unir arrays
    $unido = array_merge($numeros1, $numeros2);
    var_dump($unido);
    echo "<br>";

    //ordenar array indexada
    sort($unido);
    var_dump($unido);
    echo "<br>";

    //ordenar array asociada value
    asort($colores1);
    var_dump($colores1);
    echo "<br>";

    //ordenar array indexada
    rsort($unido);
    var_dump($unido);
    echo "<br>";

    //ordenar array asociada key
    ksort($colores1);
    var_dump($colores1);
    echo "<br>";

    krsort($colores1);
    var_dump($colores1);
    echo "<br>";

    //shuffle
    shuffle($numeros2);
    var_dump($numeros2);
    echo "<br>";

    shuffle($colores2);
    var_dump($colores2);
    echo "<br>";
    echo "<br>";

    //shift,unshift actua sobre primero elemento de array
    $fruta = ["naranja", "fresa", "melón", "plátano", "sandía"];
    var_dump($fruta);
    echo "<br>";

    $eliminado = array_shift($fruta);
    var_dump($eliminado);
    echo "<br>";
    var_dump($fruta);
    echo "<br>";

    array_unshift($fruta, "pera");
    var_dump($fruta);
    echo "<br>";

    $elimina = array_pop($fruta);
    var_dump($elimina);
    echo "<br>";
    var_dump($fruta);
    echo "<br>";

    array_push($fruta, "manzana");
    var_dump($fruta);
    echo "<br>";
    echo "<br>";

    //tamaño array
    echo count($fruta);
    echo "<br>";

    //mover puntero al final
    end($fruta);
    //donde esta el`puntero
    echo current($fruta);
    echo "<br>";

    //poner puntero al primer elemento
    reset($fruta);
    echo current($fruta);
    echo "<br>";
    echo "<br>";

    $key = array_search("rojo", $colores1);
    if ($key) {
        echo $key . " " . $colores1[$key];
    } else {
        echo "no existe";
    }




    ?>
</body>

</html>