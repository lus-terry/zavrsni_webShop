import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
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
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import CheckoutSuccess from './pages/CheckoutSuccess';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
          <NavBar />
          <Routes> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/aboutUs" element={<AboutUs />} /> 
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/visit" element={<Visit />} /> 
            <Route path="/gallery" element={<Gallery />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout-success" element={<CheckoutSuccess />} /> 
            <Route path="/"  exact element={<Home />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
