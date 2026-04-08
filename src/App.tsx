import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Analytics from "./pages/analytics/Analytics";
import MainLayout from "./components/layout/ui/MainLayout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;