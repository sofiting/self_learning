<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php

    //include
    echo "soy primer fichero";
    echo "<br>";
    echo "<br>";
    include "Operadores.php";
    echo "<br>";
    echo "<br>";
    //para que solo incluye una vez
    include_once "HelloWorld.php";
    echo "<br>";
    echo "<br>";


    // require y require_once hace casi mismo que include
    // pero es más escricto si el fichero no existe da error
    require "Arrays.php";

    //goto saltar a otra seccion del codigo
    
    ?>
</body>

</html>