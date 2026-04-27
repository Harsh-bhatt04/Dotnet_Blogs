import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../api/blogApi";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

function Home() {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await getBlogs();
        console.log(res)
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
        <div className="min-h-screen bg-gray-950 text-gray-100">

            {/* Container */}
            <div className="max-w-4xl mx-auto px-4 py-10">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        📝 Blog Platform
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Create, manage and explore blogs
                    </p>
                </div>

                {/* Form Section */}
                <div className="mb-10">
                    <BlogForm onSuccess={fetchBlogs} />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Blog List */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        All Blogs
                    </h2>

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