<?php

class ConexionCliente {
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $database = "MediPharma";
    private $conn;

    public function conectar() {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);

        if ($this->conn->connect_error) {
            die("Error de conexión: " . $this->conn->connect_error);
        }

        return $this->conn;
    }

    public function desconectar() {
        if ($this->conn) {
            $this->conn->close();
        }
    }
}
?>