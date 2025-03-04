// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import ContactButton from "./components/ContactButton";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="bg-black text-white">
//         <Header />  {/* Add Navbar/Header */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <ContactButton />  {/* Floating Contact Button */}
//         <Footer />  {/* Add Footer */}
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import ContactButton from "./components/ContactButton";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
// import Contact from "./pages/Contact";
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
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
