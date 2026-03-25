import { useState } from "react";
import { NAVLINKS_DATA } from "../../../../config/navLinks.data";
import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
    const navTitle: string = 'DevSphere';
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    return (
        <>
            <nav className="md:hidden w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

                <div className="px-6 py-4 flex items-center justify-between">
                    {/* Title */}
                    <Link to="/" className="text-2xl font-bold tracking-tight font-mono bg-gradient-to-r from-red-500 via-blue-500 via-green-500 to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        {navTitle}
                    </Link>

                    {/* Menu Icon */}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross2 className="text-blue-400 text-3xl font-bolder cursor-pointer" /> : <BiMenu className="text-blue-400 text-3xl font-bolder cursor-pointer" />}
                    </button>
                </div>

                {/* Menu links */}

            </nav>

            {
                isOpen && (
                    <div className="flex flex-col gap-6 px-6 py-2 border border-blue-200 rounded-xl mt-18 bg-[#101923]">
                        {NAVLINKS_DATA.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-mono text-gray-300 hover:text-yellow-400 transition ${location.pathname === link.path ? 'text-yellow-400' : ''}`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )
            }
        </>

    )
}

export default MobileNavbar;