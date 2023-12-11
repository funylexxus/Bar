import "./Home.css";
import Service from "./service/Service";
import heroImg from "./img/hero.png";
import Navbar from "./navbar/Navbar";
import About from "./about-us/About";
import Menu from "./menu-example/Menu";
import Chefs from "./chefs/Chefs";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "3rem" , height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}

      {/* <div className="container-xxl position-relative p-0"> */}
      <Navbar />
      <Service />
      <About />
      <Menu />
      <Chefs />
      <Footer />
      {/* <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src={heroImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Home;
