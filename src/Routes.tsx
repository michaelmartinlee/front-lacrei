import { BrowserRouter, Route, Routes as RoutesReact } from 'react-router-dom'
import { EditProfile } from './pages/EditProfile'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProfessionalData } from './pages/ProfessionalData'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import PreRegister from './pages/PreRegister'
import { PreRegisterOther } from './pages/PreRegisterOther'
import { PreRegisterOther2 } from './pages/PreRegisterOther2'
import PreRegisterSP1 from './pages/PreRegisterSP1'
import PreRegisterSP2 from './pages/PreRegisterSP2'
import ConditionsAndTerms from './pages/ConditionsAndTerms'
import Register1 from './pages/Register1'
import Register2 from './pages/Register2'
import Register3 from './pages/Register3'

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
          <Route
            path="/perfil/dados-profissionais"
            element={<ProfessionalData />}
          />
          <Route path="/pre-cadastro" element={<PreRegister />} />
          <Route
            path="/pre-cadastro/outros-estados"
            element={<PreRegisterOther />}
          />
          <Route
            path="/pre-cadastro/outros-estados-2"
            element={<PreRegisterOther2 />}
          />
          <Route path="/pre-cadastro/sp1" element={<PreRegisterSP1 />} />
          <Route path="/pre-cadastro/sp2" element={<PreRegisterSP2 />} />
          <Route path="/termos-condicoes" element={<ConditionsAndTerms />} />
          <Route path="/cadastro/1" element={<Register1 />} />
          <Route path="/cadastro/2" element={<Register2 />} />
          <Route path="/cadastro/3" element={<Register3 />} />
        </RoutesReact>
      </BrowserRouter>
      <Footer />
    </>
  )
}
