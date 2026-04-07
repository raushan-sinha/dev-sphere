import { GitHub, Reddit, Code } from "@mui/icons-material";
import type { PortfolioLinkType, ProfileBoardSocialIcons } from "../types/profileBoard.types";

//todo: Social links -
export const socialLinks: ProfileBoardSocialIcons[] = [
    {
        icon: GitHub,
        name: "GitHub",
        url: "https://github.com/raushan-sinha"
    },
    {
        icon: Reddit,
        name: "Reddit",
        url: "https://www.reddit.com/user/raushan_sinha2004/"
    },
    {
        icon: Code,
        name: "Dev.to",
        url: "https://dev.to/raushan_sinha_8efb05c7b1c"
    }
]

//todo: Portfolio link -
export const portfolioLink: PortfolioLinkType = {
    url: 'https://raushan-dev-portfolio.vercel.app/'
}