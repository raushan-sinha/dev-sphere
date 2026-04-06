import { GitHub, Reddit, Code } from "@mui/icons-material";
import type { ProfileBoardProps, ProfileBoardSocialIcons } from "../../../../types/profileBoard.types";

//todo: Social links -
const socialLinks: ProfileBoardSocialIcons[] = [
    {
        icon: GitHub,
        name: "GitHub",
        url: "https://github.com/raushan-sinha"
    },
    {
        icon: Reddit,
        name: "Reddit",
        url: "https://www.reddit.com/user/raushan-sinha"
    },
    {
        icon: Code,
        name: "LeetCode",
        url: "https://leetcode.com/raushan-sinha"
    }
]

const ProfileBoard = ({ onClose }: ProfileBoardProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">

            {/* Center Wrapper */}
            <div className="flex min-h-[100dvh] items-center justify-center p-4">

                {/* Card */}
                <div className="relative w-full max-w-md rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl p-6 text-white">

                    {/* Close Icon */}
                    <button
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
                        onClick={onClose}>
                        ✕
                    </button>

                    {/* Title */}
                    <h2 className="text-2xl font-bold tracking-wide text-center mb-3">
                        Raushan Sinha
                    </h2>

                    {/* Short Para */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                        Frontend Engineer focused on crafting high-performance, scalable UI
                        experiences with modern web technologies. Building systems, not just screens.
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