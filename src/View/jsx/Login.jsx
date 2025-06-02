import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setUserType }) => {
  const [formData, setFormData] = useState({
    emailUsuario: '',
    contraseñaUsuario: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setUserType(data.role); // Actualiza el tipo de usuario ("cliente" o "admin")
        navigate('/'); // Redirige al inicio
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-wrapper">
          <h2>Iniciar Sesión</h2>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;