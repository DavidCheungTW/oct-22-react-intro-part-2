import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-heading">
        {
          // TODO: Use data from props to populate title, author, date
          //   published, body and tags, validate props
        }
        <h2>"title"</h2>
        {
          // TODO: show post body if isPublished, or 'Coming soon!' if not
        }
      </div>
      <div className="post-author">Author: "author"</div>
      <div className="post-date">Published: "date"</div>
      <h3>Tags:</h3>
        {
          // TODO: Create list of all all provided tags
        }
    </div>
  );
};

export default Post;
