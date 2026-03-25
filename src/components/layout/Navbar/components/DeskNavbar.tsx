import { Link, useLocation } from 'react-router-dom';
import { NAVLINKS_DATA } from '../../../../config/navLinks.data'

const DeskNavbar = () => {
    const navTitle: string = 'DevSphere';
    const location = useLocation();

    return (
        <nav className="fixed top-1 inset-x-0 z-50 mx-auto w-[95%] bg-[#101923] backdrop-blur-2xl rounded-xl">

            <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

                {/* Title */}
                <Link
                    to="/"
                    className="text-4xl font-bold tracking-tight font-mono bg-gradient-to-r from-red-500 via-blue-500 via-green-500 to-yellow-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                    {navTitle}
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10">
                    {NAVLINKS_DATA.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.path}
                            className={`relative group text-gray-300 hover:text-yellow-400 transition hover:underline hover:underline-offset-4 text-xl font-mono ${location.pathname === link.path ? 'text-yellow-400' : ''}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

            </div>
        </nav>
    )
}

export default DeskNavbar