import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 shadow flex justify-center relative">
           <h1 className="text-lg font-bold text-purple-400">BlogSmith</h1>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
           <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
