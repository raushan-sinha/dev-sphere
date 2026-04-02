import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Analytics from "./pages/analytics/Analytics";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;