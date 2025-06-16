import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Pages/Footer";
import Headphone from "./Components/Pages/Headphone";
import Speakers from "./Components/Pages/Speakers";
import Earphones from "./Components/Pages/Earphones";
import ProductDetails from "./Components/Details/ProductDetails";

import CheckoutPage from "./Components/Pages/CheckoutPage";
import CheckoutModal from "./Components/CheckoutModal";

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphone />} />

          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutModal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
