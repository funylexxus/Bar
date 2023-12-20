import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { DrinksContent } from './DrinksContent';

export default function Drinks() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <DrinksContent />
      <Footer />
    </div>
  );
}
