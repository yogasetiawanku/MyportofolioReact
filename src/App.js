import { Route, Routes } from "react-router-dom";
import { About } from "./views/About";
import Navbar from "./Navbar";
import "./style/nav.css";
import "./style/home.css";
import "./style/about.css";
import "./style/service.css";
import "./style/portofolio.css";
import "./style/contact.css";
import Menu from "./assets/Menu";
import Service from "./views/Service";
import Portofolio from "./views/Portofolio";
import Contact from "./views/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
