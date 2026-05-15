import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../api/blogApi";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

function Home() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await getBlogs();
        setBlogs(res.data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        await deleteBlog(id);
        fetchBlogs();
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white">

            {/* Background Glow Effects */}
            <div className="absolute inset-0 z-0">

                {/* Top Glow */}
                <div className="absolute top-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

                {/* Right Glow */}
                <div className="absolute top-[20%] right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>

                {/* Bottom Glow */}
                <div className="absolute bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-3xl"></div>

                {/* Morph Blur */}
                <div className="absolute inset-0 backdrop-blur-[120px]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">

                {/* Hero Section */}
                <div className="text-center mb-14">

                    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
                        <span className="text-sm text-gray-300 tracking-wide">
                            Modern Blogging Platform
                        </span>
                    </div>

                    <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                        Write Freely.
                    </h1>

                    <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mt-2">
                        Share Beautifully.
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        A modern full-stack blogging platform built with
                        React, ASP.NET Core and MongoDB Atlas.
                    </p>
                </div>

                {/* Create Blog Card */}
                <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/40 p-6">
                    <BlogForm onSuccess={fetchBlogs} />
                </div>

                {/* Blog Section */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/40 p-6">

                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Latest Blogs
                            </h2>

                            <p className="text-gray-400 mt-1">
                                Explore recently published blogs
                            </p>
                        </div>

                        <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm text-gray-300">
                            {blogs.length} Posts
                        </div>
                    </div>

                    <BlogList
                        blogs={blogs}
                        onDelete={handleDelete}
                        onRefresh={fetchBlogs}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;