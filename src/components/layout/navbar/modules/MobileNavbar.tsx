import { Menu, Bedtime, Clear, Sunny } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "../../../../hook/useTheme";
import { Link } from "react-router-dom";

const title: string = "DevSphereOS";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav
      role="navigation"
      aria-label="Mobile Navigation"
      className="md:hidden fixed top-2 inset-x-0 z-50 mx-auto w-[95%] flex items-center justify-between px-4 py-3 rounded-xl bg-[#101923] backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      {/* Left - Title */}
      <Link
        to="/"
        className="text-gray-300 text-lg font-sans font-bold tracking-wide gradient-text focus:outline-none">
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
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white text-sm font-semibold">
          R
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
