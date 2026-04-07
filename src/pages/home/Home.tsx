import { CTASection, FeatureSection, FooterSection, HeroSection, InteractiveSection } from "./sections";

export default function Home() {
    return (
        <div className="min-h-screen p-4">
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
        </div>
    );
}




