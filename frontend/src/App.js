import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; 
import NavBar from './pages/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes> 
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
