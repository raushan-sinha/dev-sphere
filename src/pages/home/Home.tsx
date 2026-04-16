import { SEO } from "../../components/ui";
import { CTASection, FeatureSection, FooterSection, HeroSection, InteractiveSection } from "./sections";

export default function Home() {
    return (
        <>
            <SEO
                title="DevSphere | Build Scalable Frontend & AI Applications"
                description="DevSphere is a modern platform focused on building scalable frontend experiences, AI-powered products, and high-performance web applications."
            />

            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeatureSection />

            {/* Interactive Stats */}
            <InteractiveSection />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <FooterSection />
        </>
    )
}