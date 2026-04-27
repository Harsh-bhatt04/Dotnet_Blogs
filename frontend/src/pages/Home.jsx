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
    <div style={{ padding: "20px" }}>
      
      <h1>Blog App</h1>
      <h1 className="text-red-500 text-3xl">Tailwind Working</h1>
      <BlogForm onSuccess={fetchBlogs} />
      <hr />
      <BlogList blogs={blogs} onDelete={handleDelete} />
    </div>
  );
}

export default Home;