import { CTASection, FeatureSection, HeroSection, InteractiveSection } from "./sections";

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
            <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-500 text-sm">
                © DevSphereOS. All rights reserved.
            </footer>
        </div>
    );
}




