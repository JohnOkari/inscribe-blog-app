import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./BlogDetails.css"

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  
  
    function handleClick() {
      navigate('/');
    }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <h1 className="blog-title">{blog.title}</h1>
      <img className="blog-image" src={blog.image} alt={blog.title} />
      <p className="blog-content">{blog.content}</p>
      <p className="blog-author">By {blog.writer}</p>
      <div className="blog-actions">
        <Link to={`/editBlog/${blog.id}`} className="blog-edit-link">
          <button className="blog-edit-button">Edit</button>
        </Link>
        <button className="blog-delete-button" onClick={handleDelete} onClickk={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
