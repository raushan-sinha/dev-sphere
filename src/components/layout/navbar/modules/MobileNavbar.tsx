import { Menu, Bedtime } from "@mui/icons-material";

const title: string = "DevSphereOS";

const MobileNavbar = () => {
    return (
        <nav
            role="navigation"
            aria-label="Mobile Navigation"
            className="md:hidden fixed top-2 inset-x-0 z-50 mx-auto w-[95%] flex items-center justify-between px-4 py-3 rounded-xl bg-[#101923] backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {/* Left - Title */}
            <a href="/"
                className="text-gray-300 text-lg font-sans font-bold tracking-wide gradient-text focus:outline-none">
                {title}
            </a>

            {/* Right - Controls */}
            <div className="flex items-center gap-3">

                {/* Menu Icon */}
                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <Menu className="text-white" />
                </button>

                {/* Theme Icon */}
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <Bedtime className="text-white" />
                </div>

                {/* Profile */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white text-sm font-semibold">
                    R
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;