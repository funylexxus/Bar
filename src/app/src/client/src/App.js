import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import RegisterPage from './components/register/Register';
import LoginPage from './components/sign-in/Login';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import Cart from './components/cart/Cart';
import AboutPage from './components/about-us/AboutPage';
import ServicePage from './components/service/ServicePage';
import MenuPage from './components/menu-example/MenuPage';
import Team from './components/chefs/Team';
import MenuTestPage from './components/menu-example/MenuTestPage';
import Drinks from './components/drinks';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<RegisterPage />}></Route>
          <Route path="/sign-in" element={<LoginPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route
            path="/drinks"
            element={
              <CartProvider>
                <Drinks />
              </CartProvider>
            }
          ></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/menutest" element={<MenuTestPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
