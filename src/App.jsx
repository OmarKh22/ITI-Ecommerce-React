import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import { Container } from "react-bootstrap";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Footer from "../components/Footer/Footer";
import NotFound from "../components/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
<Container className="mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
</Container>
<Footer />
    </>
  );
}

export default App;
