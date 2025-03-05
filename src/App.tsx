import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import ContactButton from "./components/ContactButton";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
function App() {
  return (
<>
    <Router>
      <div className="bg-black text-white">
        <Cursor />
        <Header />
        <Home />
        <Services />
        <Work />
        <ContactButton />
        <Contact/>
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
