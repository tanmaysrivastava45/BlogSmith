import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error loading blog:", err));
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`, blog);
      navigate("/");
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          required
        />
        <textarea
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          name="content"
          value={blog.content}
          onChange={handleChange}
          rows="8"
          placeholder="Blog Content"
          required
        ></textarea>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;
