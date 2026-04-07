import { CTASection, FeatureSection, FooterSection, HeroSection, InteractiveSection } from "./sections";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4">
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




