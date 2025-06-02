<?php

class ConexionAdministrador {
    private $host = 'DESKTOP-6QDQ1IH\SQLEXPRESS';
    private $user = 'marketpharma_admin';
    private $password = '1234';
    private $database = 'MediPharma';
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