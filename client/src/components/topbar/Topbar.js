import React from "react";
import { Link } from "react-router-dom"
import "./topbar.css";

function Topbar() {
  return (
    <div className="top">
       <h1 className="logo">Inscribe</h1>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="topListItem"> HOME</Link>
          <Link to="/write" className="topListItem"> WRITE BLOG</Link>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://pbs.twimg.com/profile_images/1419970556410175493/09Dc_nul_400x400.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default (Topbar);
