import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error loading blog:", err));
  }, [id]);

  if (!blog) return <div className="p-6 text-gray-300">Loading...</div>;

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-300 mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(blog.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
        {blog.content}
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogDetails;
