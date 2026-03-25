import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Service from "../pages/Service/Service";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}