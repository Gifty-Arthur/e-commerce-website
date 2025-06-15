import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
