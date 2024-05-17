import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import NavBar from './pages/NavBar';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Visit from './pages/Visit';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
          <NavBar />
          <Routes> 
            <Route path="/aboutUs" element={<AboutUs />} /> 
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/visit" element={<Visit />} /> 
            <Route path="/gallery" element={<Gallery />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/not-found" element={<NotFound />} /> 
            <Route path="/"  exact element={<Home />} /> 
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
