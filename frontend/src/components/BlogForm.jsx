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
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <br />

      <button type="submit">Create</button>
    </form>
  );
}

export default BlogForm;