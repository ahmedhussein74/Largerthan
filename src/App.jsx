import "./css/App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Media from "./pages/Media";
import About from "./pages/About";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<Work />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
