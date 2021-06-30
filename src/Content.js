import { useState } from "react";
import BlogList from "./BlogList";

const Content = () => {
  const title = "Welcome to the yato blog";
  const link = "https://noragami.fandom.com/wiki/Yato";

  const [blogs, setBlogs] = useState([
    { title: "Itadakimasu!", body: "Blog 1", author: "yato", id: 1 },
    { title: "title2", body: "Blog 2", author: "kazu", id: 2 },
    { title: "title3", body: "Blog 3", author: "yato", id: 3 },
  ]);
  return (
    <>
      <header className="App-header">
        <img src="./yato.png" alt="Yato-logo" className="logo" />
        <div className="txt">
          <h1>Noragami Yato</h1>

          <h3>
            <a href={link}>{title}</a>
          </h3>
          {/*Use of dynamic data in JSP*/}
          <p>
            This is the land of the rising sun, your desecration shall not be
            allowed. Hear me! I am the god Yato, I now lay the waste with the
            seki and expel thy vast defilement.
          </p>
        </div>
      </header>
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "yato";
        })}
        title="Yato's Blogs"
      />
    </>
  );
};

export default Content;
