import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5015/api/blog" // change if needed
});

export const getBlogs = () => API.get("/");
export const createBlog = (data) => API.post("/", data);
export const deleteBlog = (id) => API.delete(`/${id}`);