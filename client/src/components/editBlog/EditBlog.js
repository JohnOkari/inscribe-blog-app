import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditBlog.css";

function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    content: "",
    writer: "",
  });

  useEffect(() => {
    fetch(`/blogs/update/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, [id]);

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/update/${id}`, {
      method: "PATCH",
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
    <div className="edit-blog-container">
      <div className="edit-blog-box">
          <h1 className="edit-title">Edit Blog</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              className="edit-blog-input"
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              className="edit-blog-input"
              type="text"
              name="image"
              value={blog.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Content:
            <textarea
              className="edit-blog-textarea"
              name="content"
              value={blog.content}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              className="edit-blog-input"
              type="text"
              name="writer"
              value={blog.writer}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="edit-blog-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
