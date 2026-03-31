import { navLinks } from "../../../../config/navLinksData";

// Navbar title -
const title: string = "DevSphereOS";

const DeskNavbar = () => {
    return (
        <nav
            className="hidden md:flex fixed top-2 sm:top-3 lg:top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-7xl items-center justify-between px-6 py-3 rounded-xl bg-[#101923] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
                <span className="text-white text-2xl font-mono font-bold tracking-wide cursor-pointer">
                    {title}
                </span>
            </div>

            {/* Center - Nav Links */}
            <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <a key={link.path} href={link.path} className="text-base font-mono font-semibold text-white hover:text-amber-400 transition cursor-pointer">
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Right - Controls */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden lg:flex items-center px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400">Search...</span>
                </div>

                {/* Theme Toggle */}
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                    🌙
                </div>

                {/* Profile */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 cursor-pointer">
                    R
                </div>
            </div>
        </nav>
    );
}

export default DeskNavbar;