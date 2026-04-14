import { EngineerProfileCard } from "./modules";

const Services = () => {
    return (
        <section className="min-h-screen px-6 py-16">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Our Engineering Team
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-70">
                    We build scalable, high-performance products with modern tech stacks.
                </p>
            </div>

            {/* Card */}
            <EngineerProfileCard />
        </section>
    );
};

export default Services;