import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Campeoes from "./pages/campeoes";
import Artilheiros from "./pages/artilheiros";

function App() {
  return (
    <>
      <Header />

      <Home />
      <Campeoes />
      <Artilheiros />

      <Footer />
    </>
  );
}

export default App;