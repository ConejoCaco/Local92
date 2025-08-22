<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 1. conectar a la base de datos
$host = "localhost";
$user = "root";   // cambia si tienes otra config
$pass = "";
$db   = "local92";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["message" => "Error de conexión: " . $conn->connect_error]));
}

// 2. guardar la imagen en carpeta uploads
$targetDir = "../uploads/";
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$imagenNombre = basename($_FILES["imagen"]["name"]);
$targetFile = $targetDir . uniqid() . "_" . $imagenNombre;

if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $targetFile)) {
    $rutaImagen = "uploads/" . basename($targetFile);
} else {
    echo json_encode(["message" => "Error al subir imagen"]);
    exit;
}

// 3. recoger datos del formulario
$titulo        = $_POST["titulo"];
$precio        = $_POST["precio"];
$stock         = $_POST["stock"];
$clasificacion = $_POST["clasificacion"];
$descripcion   = $_POST["descripcion"];
$video         = $_POST["video"];
$fecha         = $_POST["fecha"];
$consola       = $_POST["consola"];

// 4. insertar en la base de datos
$sql = "INSERT INTO juegos (Titulo, Precio, Stock, Clasificacion, Imagen, Consola, Video, Fecha_Salida, FechaPagina, Descripcion) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("siissssss", $titulo, $precio, $stock, $clasificacion, $rutaImagen, $consola, $video, $fecha, $descripcion);

if ($stmt->execute()) {
    echo json_encode(["message" => "Juego agregado correctamente"]);
} else {
    echo json_encode(["message" => "Error al guardar en BD: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
