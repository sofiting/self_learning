<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php
    echo date("Y");
    echo "<br>";

    echo date("d M Y");
    echo "<br>";

    echo date("d/m/Y");
    echo "<br>";

    echo date("d/m/Y h:i:s");
    echo "<br>";

    echo date("H:i:s");
    echo "<br>";

    echo date("l");
    echo "<br>";

    echo date("jS \of F Y h:i:s A");
    echo "<br>";
    echo "<br>";

    $hoy = getdate();
    var_dump($hoy);
    echo "<br>";
    if ($hoy["month" == "Diciember"]) {
        echo "diciembre";
    }
    echo "<br>";

    //obtener y modificar la zona horaria
    echo "Zona horaria: " . date_default_timezone_get();
    echo "<br>";

    date_default_timezone_set("America/Los_Angeles");
    echo "Zona horaria: " . date_default_timezone_get();
    echo "<br>";
    ?>
</body>

</html>