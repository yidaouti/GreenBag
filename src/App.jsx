import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Your Home page
import ShoppingPage from './pages/shopping';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';



const App = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count from ShoppingPage
  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };
  return (
    <Router>
      <Header cartCount={cartCount} />       
      <div className="pt-16">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingPage onCartCountChange={updateCartCount} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart onCartCountChange={updateCartCount}  />} />
        </Routes>
      </div>

      {/* <Footer/> */}
      <Footer />
    </Router>
  );
};

export default App;
