import { SEO } from "../../components/ui";
import { BlogCard } from "./modules";

export default function Blog() {
    return (
        <>
            <SEO
                title="DevSphere Blog | Frontend, React & AI Engineering Insights"
                description="Explore in-depth articles on frontend development, React performance, system design, and AI fundamentals—built for modern developers."
            />

            <BlogCard />
        </>
    );
}