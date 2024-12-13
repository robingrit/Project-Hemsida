import './App.scss';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Intro from '../intro/intro';
import Produkter from '../products/products';
import About from '../about/about';
//import Partners from '../partners/partners';
import Method from "../method/method";
import ProductsPage from '../productpage/products';
import ScrollToTop from '../websiteFunctions/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
        <Navbar />


        <Routes>
          {/* Main page with all sections on it */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Intro />
                <Produkter />
                <About />
                <Method />
                {/*<Partners />*/}
              </>
            }
          />


          {/* Separate page for new content */}
          <Route path="/produkter" element={<ProductsPage />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
};


export default App;