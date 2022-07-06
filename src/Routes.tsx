import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { EditProfile } from "./components/EditProfile";
import { ProfessionalData } from "./components/ProfessionalData";
import { Profile } from "./components/Profile";
import { Home } from "./pages/Home";

export function Routes() {
  return (
      <BrowserRouter>
        <RoutesReact>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<EditProfile />} />
        </RoutesReact>
      </BrowserRouter>
  );
}