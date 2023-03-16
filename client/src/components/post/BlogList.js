import { useState, useEffect } from 'react';
import './bloglist.css';
import { Link } from "react-router-dom"

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs') 
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  

  return (
    <div className="blog-list">
      <div className="blog-cards">
    
        {blogs.map(blog => (
          
          <div className="blog-card" key={blog.id}>
            <Link to={`/blogDetails/${blog.id}`} className='link'>
              <h3>{blog.title}</h3>
              <img src={blog.image} alt={blog.title} />
            </Link>
            <p>{blog.content}</p>
            <small>By {blog.writer}</small>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;