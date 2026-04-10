import { useEffect, useState } from "react";

interface ReposData {
    name: string;
    description: string;
    html_url: string;
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
                    className="group relative flex flex-col justify-between h-[260px] p-5 rounded-2xl 
                       bg-white/5 backdrop-blur-lg border border-blue-500/40 
                       hover:border-blue-500/40 transition-all duration-300 
                       hover:-translate-y-2 hover:shadow-xl">
                    {/* Top Section */}
                    <div>
                        <h3 className="text-lg font-semibold line-clamp-1">
                            {repo.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                            {repo.description || "Description is not available."}
                        </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between mt-4">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition">
                            View →
                        </a>
                    </div>

                    {/* Glow Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 
                            transition duration-300 pointer-events-none" />
                </div>
            ))}

            <div className="mt-30 p-4">
                {error}
            </div>
        </div>
    );
}