import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/ui/MainLayout';
import PageLoader from '../components/layout/ui/PageLoader';

//todo: Routes pages -
const Home = lazy(() => import('../pages/home/Home'));
const Projects = lazy(() => import('../pages/projects/Projects'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const Analytics = lazy(() => import('../pages/analytics/Analytics'));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;