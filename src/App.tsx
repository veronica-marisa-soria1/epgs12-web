import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import NivelSuperiorHome from "@/pages/NivelSuperiorHome";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import StudyPlans from "@/pages/StudyPlans";
import Enrollment from "@/pages/Enrollment";
import Cursos from "@/pages/Cursos";
import CourseEnrollment from "@/pages/CourseEnrollment";
import Sedes from "@/pages/Sedes";
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

        {/* Nivel Superior */}
        <Route path="/nivel-superior" element={<NivelSuperiorHome />} />
        <Route path="/carreras" element={<Careers />} />
        <Route path="/planes-de-estudio" element={<StudyPlans />} />
        <Route path="/inscripciones" element={<Enrollment />} />

        {/* Cursos */}
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/inscripcion" element={<CourseEnrollment />} />

        {/* Institucional (compartido) */}
        <Route path="/nosotros" element={<About />} />
        <Route path="/sedes" element={<Sedes />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/autoridades" element={<Authorities />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
