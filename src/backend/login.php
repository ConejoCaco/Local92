<?php
header('Content-Type: application/json');

// 1. conectar a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db   = "local92";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Error de conexión"]);
    exit;
}

// 2. recibir datos del form
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// 3. preparar la consulta (buscar usuario)
$sql = "SELECT User, Pass FROM admin WHERE User = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// 4. verificar resultados
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hash = $row['Pass'];

    if (password_verify($password, $hash)) {
        echo json_encode(["success" => true, "message" => "Login exitoso"]);
    } else {
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuario no encontrado"]);
}

$stmt->close();
$conn->close();
?>