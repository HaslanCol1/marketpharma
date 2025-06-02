import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Profile.css';

const Perfil = () => {
  // Estado para los datos del perfil
  const [userData, setUserData] = useState({
    tipoIdentificacion: 'Cédula de Ciudadanía',
    numeroIdentificacion: '1098765432',
    nombres: 'María Alejandra',
    apellidos: 'Rodríguez Gómez',
    email: 'maria.rodriguez@ejemplo.com',
    telefono: '3125678901',
    direccion: 'Calle 45 # 23-67, Apto 502',
    ciudad: 'Bogotá',
    fechaNacimiento: '1990-05-15'
  });

  // Estado para controlar si está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  
  // Estado para guardar temporalmente los cambios durante la edición
  const [editData, setEditData] = useState({});
  
  // Estado para mensajes de confirmación o error
  const [message, setMessage] = useState({ text: '', type: '' });
  
  // Estado para controlar si se muestra el modal de confirmación para eliminar cuenta
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Inicializar editData cuando se cambia a modo edición
  useEffect(() => {
    if (isEditing) {
      setEditData({...userData});
    }
  }, [isEditing, userData]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  // Guardar los cambios
  const handleSave = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor
    setUserData({...editData});
    setIsEditing(false);
    setMessage({
      text: 'Información actualizada correctamente',
      type: 'success'
    });
    
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  // Cancelar la edición
  const handleCancel = () => {
    setIsEditing(false);
    setEditData({});
  };

  // Eliminar cuenta (simulado)
  const handleDeleteAccount = () => {
    // Aquí iría la lógica para eliminar la cuenta
    console.log('Cuenta eliminada');
    setShowDeleteConfirm(false);
    // Redireccionar al inicio o login
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Foto de perfil" 
              className="avatar-img"
            />
            {isEditing && (
              <button className="change-photo-btn">
                Cambiar foto
              </button>
            )}
          </div>
          <div className="profile-title">
            <h1>{userData.nombres} {userData.apellidos}</h1>
            <p className="user-email">{userData.email}</p>
          </div>
        </div>

        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="profile-content">
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-section">
              <h2>Información Personal</h2>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Tipo de Identificación</label>
                  {isEditing ? (
                    <select 
                      name="tipoIdentificacion" 
                      value={editData.tipoIdentificacion || ''} 
                      onChange={handleChange}
                    >
                      <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                      <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                      <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="NIT">NIT</option>
                    </select>
                  ) : (
                    <p className="field-value">{userData.tipoIdentificacion}</p>
                  )}
                </div>
                <div className="form-group half">
                  <label>Número de Identificación</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="numeroIdentificacion" 
                      value={editData.numeroIdentificacion || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.numeroIdentificacion}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Nombres</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="nombres" 
                      value={editData.nombres || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.nombres}</p>
                  )}
                </div>
                <div className="form-group half">
                  <label>Apellidos</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="apellidos" 
                      value={editData.apellidos || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.apellidos}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Correo Electrónico</label>
                  <p className="field-value">{userData.email}</p>
                  <span className="field-note">El correo electrónico no se puede modificar</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Teléfono</label>
                  {isEditing ? (
                    <input 
                      type="tel" 
                      name="telefono" 
                      value={editData.telefono || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.telefono}</p>
                  )}
                </div>
                <div className="form-group half">
                  <label>Fecha de Nacimiento</label>
                  {isEditing ? (
                    <input 
                      type="date" 
                      name="fechaNacimiento" 
                      value={editData.fechaNacimiento || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.fechaNacimiento}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Dirección</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="direccion" 
                      value={editData.direccion || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.direccion}</p>
                  )}
                </div>
                <div className="form-group half">
                  <label>Ciudad</label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="ciudad" 
                      value={editData.ciudad || ''} 
                      onChange={handleChange}
                    />
                  ) : (
                    <p className="field-value">{userData.ciudad}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-primary" onClick={() => setIsEditing(true)}>Editar Perfil</button>
                  <button type="button" className="btn btn-danger" onClick={() => setShowDeleteConfirm(true)}>Eliminar Cuenta</button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Modal de confirmación para eliminar cuenta */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¿Estás seguro?</h2>
            <p>Esta acción eliminará permanentemente tu cuenta y todos tus datos. Esta operación no se puede deshacer.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={handleDeleteAccount}>Sí, eliminar mi cuenta</button>
              <button className="btn btn-secondary" onClick={() => setShowDeleteConfirm(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;