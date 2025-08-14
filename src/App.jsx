import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 300, // delay so it runs after the image animation

      easing: "ease-in-out",
      // once: true,
    });
    AOS.refresh();
  });

  // Routing
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
