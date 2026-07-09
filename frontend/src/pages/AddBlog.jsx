import { useState } from "react";
import { saveBlog } from '../services/api';
import { useNavigate,Link } from "react-router-dom";
function AddBlog() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await saveBlog(formData);
          if (response.success) {
              alert(response.message);
              setFormData({
                  title: "",
                  description: "",
              });
              navigate("/");
          } else {
              alert(response.message);
          }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h4>
                        <Link to="/">Click to back</Link>
                    </h4>
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Add Blog</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter blog title"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter description"
                                        required
                                    ></textarea>
                                </div>
                                <div className="d-grid d-md-flex justify-content-md-end">
                                    <button type="submit" className="btn btn-primary">
                                        Add Blog
                                    </button>
                                </div>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;