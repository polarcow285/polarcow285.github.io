import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import FencingPage from "./pages/FencingPage";

function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    target ? target.scrollIntoView() : window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollOnNavigate />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fencing" element={<FencingPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}
