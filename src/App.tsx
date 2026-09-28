import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import StudyPlans from "@/pages/StudyPlans";
import Enrollment from "@/pages/Enrollment";
import News from "@/pages/News";
import Authorities from "@/pages/Authorities";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/carreras" element={<Careers />} />
        <Route path="/planes-de-estudio" element={<StudyPlans />} />
        <Route path="/inscripciones" element={<Enrollment />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/autoridades" element={<Authorities />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
