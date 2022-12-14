import React from "react";
import { Link } from "react-router-dom";
import { Blog1 } from "../images";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={Blog1} className="img-fluid w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">Dec 14, 2022</p>
        <h5 className="title">A Beautiful Day To Spend Inside VR</h5>
        <p className="description">
          Ever feel like you're missing something, trust us your wildest dreams
          will come true after you've read this.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
