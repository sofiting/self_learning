<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="sofia" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>

<body>
    <?php
    //pasa variable por url
  
    echo "Nombre: " . $_GET["nombre"];
    echo "<br>";
    echo "Cargo: " . $_GET["cargo"];
    ?>
</body>

</html>