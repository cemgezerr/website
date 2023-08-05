import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anasayfa from "./Pages/Anasayfa";
import Projeler from "./Pages/Projeler";
import Teknolojiler from "./Pages/Teknolojiler";
import Hakkimda from "./Pages/Hakkimda";
import Iletisim from "./Pages/Iletisim";
import Navbar from "./components/Navbar";
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/teknolojiler" element={<Teknolojiler />} />
          <Route path="/hakkimda" element={<Hakkimda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
