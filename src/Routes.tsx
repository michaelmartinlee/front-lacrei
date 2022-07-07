import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { EditProfile } from "./pages/EditProfile";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProfessionalData } from "./pages/ProfessionalData";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import PreRegister from "./pages/PreRegister";
import { PreRegisterOther } from "./pages/PreRegisterOther";
import { PreRegisterOther2 } from "./pages/PreRegisterOther2";

export function Routes() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <RoutesReact>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/perfil/editar" element={<EditProfile />} />
          <Route path="/perfil/dados-profissionais" element={<ProfessionalData />} />
          <Route path="/pre-cadastro" element={<PreRegister />} />
          <Route path="/pre-cadastro/outros-estados" element={<PreRegisterOther />} />
          <Route path="/pre-cadastro/outros-estados-2" element={<PreRegisterOther2 />} />
        </RoutesReact>
      </BrowserRouter>
    <Footer />
    </>
  );
}