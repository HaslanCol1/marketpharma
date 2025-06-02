import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    emailUsuario: '',
    contraseñaUsuario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor y autenticar
    console.log('Datos de login:', formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-wrapper">
          <h2>Iniciar Sesión</h2>
          {/* Puedes agregar un div de alerta aquí si lo necesitas */}
          {/* <div className="alert">Mensaje de error</div> */}
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
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
            
            <div className="form-group">
              <label htmlFor="contraseñaUsuario">Contraseña</label>
              <input
                type="password"
                id="contraseñaUsuario"
                name="contraseñaUsuario"
                value={formData.contraseñaUsuario}
                onChange={handleChange}
                required
                maxLength={250}
                placeholder="Ingresa tu contraseña"
              />
            </div>
            
            <button type="submit">Iniciar Sesión</button>
            
            <div className="register-links">
              <p>¿No tienes una cuenta? <Link to="/registro">Registrarse</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;