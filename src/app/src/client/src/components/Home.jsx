import './Home.css';
import Service from './service/Service';
import NavbarPage from './navbar/NavbarPage';
import About from './about-us/About';
import Menu from './menu-example/Menu';
import Chefs from './chefs/Chefs';
import Footer from './footer/Footer';
import DrinksList from './drinks/DrinksList';
import { CartProvider } from '../context/cartContext';

function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "3rem" , height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}

      {/* <div className="container-xxl position-relative p-0"> */}
      <NavbarPage />
      <Service />
      <About />
      <Menu />
      <DrinksList />
      <Chefs />
      <Footer />
    </div>
  );
}

export default Home;
