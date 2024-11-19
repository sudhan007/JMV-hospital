import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Home from "./pages/Home"; // Create a Home page for the landing content
import FeaturedProducts from "./pages/FeaturedProducts";
import About from "./pages/About";
import Cards from "./pages/Cards";
import NewProducts from "./pages/NewProducts";
import OurProducts from "./pages/OurProducts";
import ProductView from "./pages/ProductView"; // Create a page for viewing a single product

function App() {
  return (
    <Router>
      {/*@ts-ignore */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/featured-products' element={<FeaturedProducts />} />
        <Route path='/about' element={<About />} />
        <Route path='/new-products' element={<NewProducts />} />
        <Route path='/our-products' element={<OurProducts />} />
        <Route path='/product/:code' element={<ProductView />} />
        <Route path='/contact' element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
