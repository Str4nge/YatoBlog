import React from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
