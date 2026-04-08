import React from 'react'
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../../hook/useTheme';

const MainLayout: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-amber-50 text-black' : 'bg-gradient-to-br from-[#0f172a] to-[#020617] text-white'}`}>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout;