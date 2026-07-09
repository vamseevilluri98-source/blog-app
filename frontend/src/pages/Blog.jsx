import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../services/api";

function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      console.log(response)
      if (response.success) {
        setBlogs(response.data || []);
      }else{
        alert("Something wentwrong")
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blogs</h2>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-blog")}
        >
          Add Blog
        </button>
      </div>

      {blogs.length === 0 ? (
        <div className="alert alert-info">
          No blogs found.
        </div>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
              <div className="card shadow-sm h-100">

                <div className="card-body">
                  <h5 className="card-title">
                    {blog.title}
                  </h5>

                  <p className="card-text">
                    {blog.description}
                  </p>
                </div>

                <div className="card-footer text-muted">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : "N/A"}
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Blog;