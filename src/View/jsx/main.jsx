import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import App from "./App";
import Login from "./Login";
import Registro from "./Registro";
import Perfil from "./Perfil";

function Main() {
  const [userType, setUserType] = useState("usuario"); // Valor inicial como "usuario"

  return (
    <StrictMode>
      <BrowserRouter>
        <Navigation userType={userType} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login setUserType={setUserType} />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
