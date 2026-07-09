const BlogForm = () => {
  return (
    <div className="card shadow">
      <div className="card-header">
        <h4>Add New Blog</h4>
      </div>

      <div className="card-body">

        <div className="mb-3">
          <label className="form-label">
            Title
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Content
          </label>

          <textarea
            rows="5"
            className="form-control"
            placeholder="Enter content"
          ></textarea>
        </div>

        <button className="btn btn-primary">
          Add Blog
        </button>

      </div>
    </div>
  );
};

export default BlogForm;