import { socialLinks } from "../../../../config/socialLinks.data";
import type { ProfileBoardProps } from "../../../../types/profileBoard.types";



const ProfileBoard = ({ onClose }: ProfileBoardProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">

            {/* Center Wrapper */}
            <div className="flex min-h-[100dvh] items-center justify-center p-4" onClick={onClose}>

                {/* Card */}
                <div className="relative w-full max-w-md rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl px-6 pt-8 pb-6 text-white overflow-hidden">

                    {/* 🔥 Animated Border Glow */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent bg-[linear-gradient(120deg,rgba(255,255,255,0.15),rgba(255,255,255,0.02),rgba(255,255,255,0.15))] bg-[length:200%_200%] opacity-40 animate-[borderGlow_6s_linear_infinite]" />

                    {/* Close Icon */}
                    <button
                        className="absolute top-3 right-5 text-gray-400 hover:text-white transition cursor-pointer"
                        onClick={onClose}>
                        ✕
                    </button>

                    {/* Title */}
                    <h2 className="text-2xl font-bold tracking-wide text-center mb-3">
                        Raushan Sinha
                    </h2>

                    {/* Short Para */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                        Frontend Engineer specializing in building scalable, high-performance web applications with a strong focus on UI/UX and system design. Experienced in React, modern JavaScript, and performance optimization, with a product-driven mindset toward crafting seamless user experiences. Passionate about transforming complex problems into elegant, production-ready solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mb-6">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                    <Icon fontSize="medium" />
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <button className="px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBoard;