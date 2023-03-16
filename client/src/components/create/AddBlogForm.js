import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBlogForm.css";

function AddBlogForm() {
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    content: "",
    writer: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlog({
          title: "",
          image: "",
          content: "",
          writer: "",
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-blog-form-container">
      <form className="add-blog-form" onSubmit={handleSubmit}>
         <h1 className="form-title">Add Blog</h1>
        <label className="form-label">
          Title:
          <input
            className="form-input"
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Image URL:
          <input
            className="form-input"
            type="text"
            name="image"
            value={blog.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Content:
          <textarea
            className="form-textarea"
            name="content"
            value={blog.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Author:
          <input
            className="form-input"
            type="text"
            name="writer"
            value={blog.writer}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="form-submit" type="submit">
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlogForm;
