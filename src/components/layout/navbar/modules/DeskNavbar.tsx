import { Bedtime, Sunny } from "@mui/icons-material";
import { navLinks } from "../../../../config/navLinksData";
import { memo, } from "react";
import { useLocation } from "react-router-dom";

// Navbar title -
const title: string = "DevSphereOS";

const DeskNavbar = memo(() => {
    const location = useLocation();

    return (
        <nav
            role="navigation" aria-label="Main Navigation"
            className="hidden md:flex fixed top-2 sm:top-3 lg:top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-7xl items-center justify-between px-6 py-3 rounded-xl bg-[#101923] backdrop-blur-md lg:backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
                <a href="/" className="text-gray-300 text-2xl font-sans font-bold tracking-wide cursor-pointer gradient-text focus:outline-none focus:ring-2 focus:ring-amber-400">
                    {title}
                </a>
            </div>

            {/* Center - Nav Links */}
            <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <a key={link.path} href={link.path} className={`text-sm font-sans font-semibold transition-all duration-200 cursor-pointer focus:outline-none ${location.pathname === link.path ? 'text-amber-400 underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-amber-400 hover:underline underline-offset-4 decoration-2'}`}>
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Right - Controls */}
            <div className="flex items-center gap-4">

                {/* Theme Toggle */}
                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                    <Bedtime className="text-white cursor-pointer" />
                    <Sunny className="text-amber-500 cursor-pointer" />
                </button>

                {/* Profile */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 cursor-pointer text-white">
                    R
                </div>
            </div>
        </nav>
    );
})

export default DeskNavbar;