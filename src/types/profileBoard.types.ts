import type { SvgIconComponent } from "@mui/icons-material";

export interface ProfileBoardProps {
    onClose: () => void;
}

export interface ProfileBoardSocialIcons {
    icon: SvgIconComponent;
    name: string;
    url: string;
}