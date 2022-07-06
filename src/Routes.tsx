import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { EditProfile } from "./components/EditProfile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RoutesReact>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<EditProfile />} />
        </RoutesReact>
      </BrowserRouter>
      <Footer />
    </>
  );
}
