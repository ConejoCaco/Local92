<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = 'localhost';
$db = 'local92';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["message" => "Error de conexión: " . $conn->connect_error]));
}

// Recoger datos del formulario
$titulo = $_POST['titulo'];
$precio = $_POST['precio'];
$stock =  $_POST['stock'];
$descripcion = $_POST['descripcion'];
$consola = $_POST['consola'];
$video = $_POST['video'];

$targetDir = "../uploads/";
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}
$imagenInfo = pathinfo($_FILES["imagen"]["name"]);
$imagenExtension = $imagenInfo['extension'];

// Crear un nombre de archivo seguro a partir del título del juego
$nombreBase = str_replace(' ', '_', $titulo);
$consolaSuf = str_replace(' ','_', $consola);


$imagenNombre =  $nombreBase.'_'.$consolaSuf. '.' . $imagenExtension;
$targetFile = $targetDir . $imagenNombre;

if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $targetFile)) {
    $rutaImagen = "uploads/" . basename($targetFile);
} else {
    echo json_encode(["message" => "Error al subir imagen"]);
 exit;
}

$sql = "INSERT INTO productos (Titulo, Precio, Stock, Descripcion, Imagen, Consola, Video) Values (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("siissss", $titulo, $precio, $stock, $descripcion, $rutaImagen, $consola, $video);
if ($stmt->execute()) {
    echo json_encode(["message" => "Juego agregado correctamente"]);
} else {
    echo json_encode(["message" => "Error al guardar en BD: " . $stmt->error]);
}
$stmt->close();
$conn->close();

?>

