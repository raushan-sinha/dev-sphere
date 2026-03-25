import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import { MobileNavbar } from "../components/layout/Navbar/components";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <MobileNavbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}