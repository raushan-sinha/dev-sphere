import { Menu, Bedtime, Clear, Sunny } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "../../../../hook/useTheme";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../../../config/navLinksData";
import DevImage from "../../../../assets/dev.png";

const title: string = "DevSphereOS";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    return (
        <>
            <nav
                role="navigation"
                aria-label="Mobile Navigation"
                className="md:hidden fixed top-2 inset-x-0 z-50 mx-auto w-[95%] flex items-center justify-between px-4 py-3 rounded-xl bg-[#101923] backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                {/* Left - Title */}
                <Link
                    to="/"
                    className="text-gray-300 text-lg font-sans font-bold tracking-wide focus:outline-none">
                    {title}
                </Link>

                {/* Right - Controls */}
                <div className="flex items-center gap-3">
                    {/* Menu Icon */}
                    <button
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <Clear className="text-white" />
                        ) : (
                            <Menu className="text-white" />
                        )}
                    </button>

                    {/* Theme Icon */}
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? (
                            <Bedtime className="text-white cursor-pointer" />
                        ) : (
                            <Sunny className="text-amber-500 cursor-pointer" />
                        )}
                    </div>

                    {/* Profile */}
                    <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer border border-white/10 hover:scale-105 transition">
                        <img
                            src={DevImage}
                            alt="user profile"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Menu UI */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                {/* Menu Panel */}
                <div
                    className={`absolute top-20 left-1/2 -translate-x-1/2 w-[92%] rounded-2xl bg-[#101923]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
                        }`}>
                    {/* Menu Links */}
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition">
                                <span
                                    className={`${location.pathname === link.path ? "text-amber-400" : "text-gray-300 group-hover:text-amber-400"} text-sm font-sans font-semibold`}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
