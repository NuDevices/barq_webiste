import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import Applications from "./pages/Applications";
import News from "./pages/News";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
