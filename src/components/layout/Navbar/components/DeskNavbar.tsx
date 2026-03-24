import { Link, useLocation } from 'react-router-dom';
import { NAVLINKS_DATA } from '../../../../config/navLinks.data'

const DeskNavbar = () => {
    const navTitle: string = 'DevSphere';
    const location = useLocation();

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

                {/* Title */}
                <Link to='/' className="text-2xl font-bold tracking-tight cursor-pointer font-mono text-white">
                    {navTitle}
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-10">
                    {NAVLINKS_DATA.map((link, idx) => (
                        <Link key={idx} to={link.path} className={`relative group text-gray-300 hover:text-yellow-400 font-medium transition hover:underline hover:underline-offset-4 font-mono ${location.pathname === link.path ? 'text-yellow-400' : ''}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default DeskNavbar