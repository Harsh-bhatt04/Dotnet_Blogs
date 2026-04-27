import { useState } from "react";
import { updateBlog } from "../api/blogApi";

function BlogList({ blogs, onDelete, onRefresh }) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const startEdit = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setBody(blog.body);
  };

  const handleUpdate = async () => {
    await updateBlog(editingId, { title, body });
    setEditingId(null);
    onRefresh(); // reload blogs
  };

  return (
    <div className="grid gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
        >
          {editingId === blog.id ? (
            <>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 p-2 bg-gray-800 text-white rounded"
              />
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full mb-2 p-2 bg-gray-800 text-white rounded"
              />

              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-600 px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-white">
                {blog.title}
              </h3>
              <p className="text-gray-400">{blog.body}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => startEdit(blog)}
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(blog.id)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BlogList;