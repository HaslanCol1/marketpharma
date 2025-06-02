<?php
// filepath: c:\Users\Josue Marun\Documents\Projects\medipharma\src\Controller\MarketPharma.php

include 'ConexionCliente.php';

function registrarUsuario($conn, $tipoIdentificacion, $numeroIdentificacion, $nombres, $apellidos, $email, $contrasena)
{
    // Preparar la llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL sp_RegistrarUsuario(?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Error al preparar la consulta: " . $conn->error);
    }

    // Vincular parámetros
    $stmt->bind_param("sissss", $tipoIdentificacion, $numeroIdentificacion, $nombres, $apellidos, $email, $contrasena);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $mensaje = $result->fetch_assoc();
        echo $mensaje['Mensaje'];
    } else {
        echo "Error al registrar el usuario: " . $stmt->error;
    }

    // Cerrar el statement
    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $conexionCliente = new ConexionCliente();
    $conn = $conexionCliente->conectar();

    $email = $data['emailUsuario'];
    $password = $data['contraseñaUsuario'];

    // Consulta para verificar el usuario
    $stmt = $conn->prepare("SELECT role FROM usuarios WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode(["success" => true, "role" => $user['role']]); // Devuelve el rol
    } else {
        echo json_encode(["success" => false]);
    }

    $stmt->close();
    $conexionCliente->desconectar();
}
