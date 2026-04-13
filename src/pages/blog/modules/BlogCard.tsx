import React from 'react'
import { blogsData } from '../../../config/blogDetails.data';

const BlogCard: React.FC = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-20">
                {blogsData.map((blog, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl border border-black bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 via-transparent to-white/10" />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex items-center justify-between text-xs mb-3">
                                <span className="px-2 py-1 rounded-md">
                                    {blog.tag}
                                </span>
                                <span>{blog.date}</span>
                            </div>

                            <h2 className="text-lg sm:text-xl font-semibold leading-snug transition">
                                {blog.title}
                            </h2>

                            <p className="mt-3 text-sm leading-relaxed transition">
                                {blog.desc}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-6">
                            <button className="w-full py-2 rounded-lg border border-cyan-500 text-sm font-medium transition-all duration-300">
                                View Blog
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogCard;