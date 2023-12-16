import './App.css';
import Home from './components/Home';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import RegisterPage from './components/register/Register';
import LoginPage from './components/sign-in/Login';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<RegisterPage />}></Route>
          <Route path="/sign-in" element={<LoginPage />}></Route>
        </Routes>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
