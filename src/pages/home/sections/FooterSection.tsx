import React from 'react'

const FooterSection: React.FC = () => {
    return (
        <footer className="border-t border-gray-500 px-6 py-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DevSphereOS. All rights reserved.
        </footer>
    )
}

export default FooterSection;