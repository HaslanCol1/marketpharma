import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    tipoIdentificacionUsuario: '',
    numeroIdentificacion: '',
    nombresUsuario: '',
    apellidosUsuario: '',
    emailUsuario: '',
    contraseñaUsuario: '',
    confirmarContraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.contraseñaUsuario !== formData.confirmarContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch('/src/Controller/MarketPharma.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
      } else {
        alert(data.message || "Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="registro-page">
      <div className="registro-container">
        <div className="registro-form-wrapper">
          <h2>Registrarse</h2>
          
          <form className="registro-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="tipoIdentificacionUsuario">Tipo de Identificación</label>
                <select
                  id="tipoIdentificacionUsuario"
                  name="tipoIdentificacionUsuario"
                  value={formData.tipoIdentificacionUsuario}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                  <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                  <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="NIT">NIT</option>
                </select>
              </div>
              
              <div className="form-group half">
                <label htmlFor="numeroIdentificacion">Número de Identificación</label>
                <input
                  type="text"
                  id="numeroIdentificacion"
                  name="numeroIdentificacion"
                  value={formData.numeroIdentificacion}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su número de identificación"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="nombresUsuario">Nombres</label>
                <input
                  type="text"
                  id="nombresUsuario"
                  name="nombresUsuario"
                  value={formData.nombresUsuario}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Ingrese sus nombres"
                />
              </div>
              
              <div className="form-group half">
                <label htmlFor="apellidosUsuario">Apellidos</label>
                <input
                  type="text"
                  id="apellidosUsuario"
                  name="apellidosUsuario"
                  value={formData.apellidosUsuario}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Ingrese sus apellidos"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group full">
                <label htmlFor="emailUsuario">Correo Electrónico</label>
                <input
                  type="email"
                  id="emailUsuario"
                  name="emailUsuario"
                  value={formData.emailUsuario}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="contraseñaUsuario">Contraseña</label>
                <input
                  type="password"
                  id="contraseñaUsuario"
                  name="contraseñaUsuario"
                  value={formData.contraseñaUsuario}
                  onChange={handleChange}
                  required
                  maxLength={250}
                  placeholder="Ingrese su contraseña"
                />
              </div>
              
              <div className="form-group half">
                <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmarContraseña"
                  name="confirmarContraseña"
                  value={formData.confirmarContraseña}
                  onChange={handleChange}
                  required
                  maxLength={250}
                  placeholder="Confirme su contraseña"
                />
              </div>
            </div>
            
            <button type="submit">Registrarse</button>
            
            <div className="login-link">
              <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;