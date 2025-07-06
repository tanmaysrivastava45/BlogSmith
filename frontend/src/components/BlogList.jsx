import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-purple-300">All Blogs</h1>
      <Link
         to="/create"
         className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded"
        >
       Create
      </Link>
</div>

      
      {blogs.length === 0 ? (
        <p className="text-gray-400">No blogs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 p-5 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-purple-200 mb-2">{blog.title}</h2>
                <p className="text-gray-300">
                  {blog.content.length > 120
                    ? `${blog.content.slice(0, 120)}...`
                    : blog.content}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleString()}
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded"
                  >
                    Read More
                  </Link>
                  <Link
                    to={`/edit/${blog._id}`}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;
