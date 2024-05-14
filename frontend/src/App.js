import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import NavBar from './pages/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/"  exact element={<Home />} /> 
        </Routes> 
        
      </BrowserRouter>
    </div>
  );
}

export default App;
