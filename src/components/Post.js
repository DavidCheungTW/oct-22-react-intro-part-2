import React, { useState } from "react";

const Post = ({ postData, handleUpvote }) => {
  const { title, body, tags, author, date, isPublished } = postData;
  const [count, setCount] = useState(0); // state inside Post.js

  //const postBody = isPublished ? body : "Coming soon!";

  const handleClick = (event) => {
    setCount((prev) => prev + 1);
    handleUpvote(event.target.value);
  };
  return (
    <div className="post">
      <div className="post-heading">
        {
          // TODO: Use data from props to populate title, author, date
          //   published, body and tags, validate props
        }
        <h2>{title}</h2>
        {isPublished ? body : "Coming soon!"}
      </div>
      <div className="post-counter">
        <span>Upvotes: {count}</span>
        <button type="button" value={title} onClick={handleClick}>
          Upvote this
        </button>
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <h3>Tags:</h3>
      {
        // TODO: Create list of all all provided tags
      }
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
