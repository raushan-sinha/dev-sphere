import { useEffect, useState } from "react";

interface ReposData {
    name: string;
    description: string;
    stargazers_count: string;
    html_url: string;
    language: string;
    updated_at: string;
    url: string;
}

const githubApi: string = import.meta.env.VITE_GITHUB_API;

export default function Projects() {
    const [repos, setRepos] = useState<ReposData[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchReposData = async () => {
            try {
                const response = await fetch(githubApi);
                if (!response.ok) throw new Error("API data is not right.");

                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error', error);
                setError('Network connection is poor. Please check your network connection.');
            }
        }

        fetchReposData();
    }, []);

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-20">
            {repos.map((repo, id) => (
                <div
                    key={id}
                    className="group relative flex flex-col justify-between h-[280px] p-5 rounded-2xl 
                 bg-white/5 backdrop-blur-xl border border-blue-500 
                 hover:border-blue-500/50 transition-all duration-300 
                 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    {/* Top Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-amber-600 line-clamp-1">
                            {repo.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 line-clamp-3 leading-relaxed">
                            {repo.description || "Description is not available."}
                        </p>
                    </div>

                    {/* 🔹 Middle Info Section */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-300">

                        {/* Stars */}
                        <div className="flex flex-col items-center bg-white/5 rounded-lg py-2">
                            <span className="text-yellow-400 text-sm font-semibold">
                                ⭐ {repo.stargazers_count}
                            </span>
                            <span className="opacity-70">Stars</span>
                        </div>

                        {/* Language */}
                        <div className="flex flex-col items-center bg-white/5 rounded-lg py-2">
                            <span className="text-blue-400 text-sm font-semibold">
                                {repo.language || "N/A"}
                            </span>
                            <span className="opacity-70">Language</span>
                        </div>

                        {/* 🕒 Updated */}
                        <div className="flex flex-col items-center bg-white/5 rounded-lg py-2">
                            <span className="text-purple-400 text-sm font-semibold">
                                {new Date(repo.updated_at).toLocaleDateString()}
                            </span>
                            <span className="opacity-70">Updated</span>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex justify-between items-center mt-5">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                        >
                            View Code →
                        </a>
                    </div>

                    {/* 🔥 Glow Hover Layer */}
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                   bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 
                   transition duration-300 pointer-events-none"
                    />
                </div>
            ))}

            {/* Error */}
            <div className="col-span-full text-center text-red-400 mt-6">
                {error}
            </div>
        </div>
    );
}