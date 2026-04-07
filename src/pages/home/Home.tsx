import { Button } from "@mui/material";
import { Bolt } from "@mui/icons-material";
import { FeatureSection, HeroSection, InteractiveSection } from "./sections";

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
            <section className="px-6 py-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to level up your dev workflow?
                </h2>
                <p className="text-gray-400 mb-8">
                    Join DevSphereOS and transform how you build modern applications.
                </p>
                <Button variant="contained" size="large" endIcon={<Bolt />}>
                    Get Started Now
                </Button>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} DevSphereOS. All rights reserved.
            </footer>
        </div>
    );
}




