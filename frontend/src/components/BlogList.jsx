import { deleteBlog } from "../api/blogApi";

function BlogList({ blogs, onDelete }) {
  return (
    <div>
      <h2>All Blogs</h2>

      {blogs.length === 0 && <p>No blogs found</p>}

      {blogs.map((blog) => (
        <div key={blog.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>

          <button onClick={() => onDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;