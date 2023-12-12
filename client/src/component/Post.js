// src/components/Post.js
import React from "react";
import "./Post.css"; // Import the CSS file

const Post = ({ posterName, dateTime, content }) => {
  return (
    <div className="post">
      <h3 className="poster-name">{posterName}</h3>
      <p className="datetime">{dateTime}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default Post;
