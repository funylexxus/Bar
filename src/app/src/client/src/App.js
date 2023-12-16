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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<RegisterPage />}></Route>
          <Route path="/sign-in" element={<LoginPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
