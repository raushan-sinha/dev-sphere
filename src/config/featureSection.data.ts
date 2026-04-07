import type { featureTypes } from "../types/featureSection.types";
import { AutoAwesome, DashboardCustomize, Bolt } from "@mui/icons-material";

export const featuresData: featureTypes[] = [
    {
        icon: DashboardCustomize,
        title: "Unified Dashboard",
        desc: "Centralized control panel to manage projects, analytics, and deployments in one place.",
    },
    {
        icon: AutoAwesome,
        title: "AI-Powered Workflows",
        desc: "Automate repetitive tasks, generate UI, and integrate GenAI directly into your dev lifecycle.",
    },
    {
        icon: Bolt,
        title: "Performance First",
        desc: "Optimized for speed with real-time insights, Lighthouse tracking, and production metrics.",
    },
]