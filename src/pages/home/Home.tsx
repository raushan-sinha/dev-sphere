import { Button } from "@mui/material";
import { Bolt } from "@mui/icons-material";
import { HeroSection } from "./sections";
import FeaturesSection from "./sections/FeaturesSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Interactive Stats */}
            <section className="px-6 py-20 bg-black/40">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <h4 className="text-3xl font-bold text-blue-500">{stat.value}</h4>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

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



const stats = [
    { value: "10K+", label: "Developers Onboarded" },
    { value: "500+", label: "Projects Built" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User Satisfaction" },
];
