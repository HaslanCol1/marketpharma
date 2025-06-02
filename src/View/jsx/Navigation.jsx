import { Link } from "react-router-dom";
import '../css/Navigation.css';
import Perfil from '../Imagenes/Perfil.png';
import Logout from '../Imagenes/Logout.png';

function Navigation({ userType }) {
  return (
    <div className="nav-container">
      <div className="topbar">
        <div className="nav-left">
          <ul>
            <li>
              <Link to="/">MarketPharma</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            {userType === "cliente" && (
              <>
                <li>
                  <Link to="/carrito">Carrito</Link>
                </li>
                <li>
                  <Link to="/mis-compras">Mis Compras</Link>
                </li>
              </>
            )}
            {userType === "admin" && (
              <>
                <li>
                  <Link to="/admin/usuarios">Gestión Usuarios</Link>
                </li>
                <li>
                  <Link to="/admin/productos">Gestión Productos</Link>
                </li>
                <li>
                  <Link to="/admin/compras">Gestión Compras</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            {userType ? (
              <>
                <li>
                  <Link to="/perfil">
                    <img className="profile-img" src={Perfil} alt="Perfil" />
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <img className="logout-img" src={Logout} alt="Cerrar Sesión" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link to="/registro">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
