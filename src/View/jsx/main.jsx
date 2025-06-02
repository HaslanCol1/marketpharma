import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import App from "./App";
import Login from "./Login";
import Registro from "./Registro";
//import Productos from "./Productos";
//import Carrito from './Carrito';
//import MisCompras from "./MisCompras";
//import GestionUsuarios from "./admin/usuarios";
//import GestionProductos from "./admin/productos";
//import GestionCompras from "./admin/compras";
import Perfil from "./Perfil";

const userType = "cliente";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation userType={userType}/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
