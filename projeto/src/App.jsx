import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Campeoes from "./pages/campeoes";
import Artilheiros from "./pages/artilheiros";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campeoes" element={<Campeoes />} />
          <Route path="/artilheiros" element={<Artilheiros />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;