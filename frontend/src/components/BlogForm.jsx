import { useState } from "react";
import { createBlog } from "../api/blogApi";

function BlogForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("All fields are required");
      return;
    }

    await createBlog({ title, body });

    setTitle("");
    setBody("");
    onSuccess(); 
  };

  return (
  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
    
    {/* Heading */}
    <h2 className="text-2xl font-semibold mb-6 text-white">
      Create a New Blog
    </h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Body Input */}
      <textarea
        placeholder="Write your blog content..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-white p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium"
      >
        Publish Blog
      </button>
    </form>
  </div>
);
}

export default BlogForm;