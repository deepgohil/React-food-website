import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Router>

            <Nav />
            <Routes>
            <Route path="/" element={<Home/>} />
              {/* <Route path="/products" exact component={<Products/>}></Route> */}
              <Route path="/about" element={<About/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/products" element={<Products/>} />
              </Routes>
          

    </Router>
</>
  );
}

export default App;
