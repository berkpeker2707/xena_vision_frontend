import React from "react";

const BlogTile = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function blogPost() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "30px",
          }}
        >
          Xena Vision Blog
        </h1>
        <div className="landingBlogOuter" style={{ display: "flex" }}>
          <div
            className="blogImageOuter"
            style={{
              justifyContent: "flex-end",
              display: "flex",
              padding: "10px",
            }}
          >
            <img
              className="blogImageInner"
              src={`${thumbnail}`}
              alt="blogOne"
              style={{
                width: "320px",
                height: "224px",
                border: "1 solid #ccc",
                borderRadius: "16px",
                boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
              }}
            />
          </div>
          <div
            className="landingBlogInner"
            style={{
              padding: "10px",
              marginRight: "170px",
              alignSelf: "center",
            }}
          >
            <h2 className="landingBlogH2">
              {truncateText(cleanTitle(title), 0, 60)}
            </h2>
            <h5 className="landingBlogH5">{convertDate(pubDate)}</h5>
            <p className="landingBlogP">
              {truncateText(toText(content), 0, 400) + "..."}
            </p>
            <a
              href={`${link}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#3AB8E8" }}
            >
              <h5 style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                > Read More
              </h5>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle;
  }

  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }

  function toText(block) {
    let tag = document.createElement("div");
    tag.innerHTML = block;
    block = tag.innerText;
    return block;
  }

  function convertDate(date) {
    let dateArray = date.slice(0, 10).split("-");
    let month = dateArray.shift();
    let year = dateArray.shift();
    dateArray.push(year);
    dateArray.push(month);
    return `${dateArray.join("/")}`;
  }

  return <div className="PostContainer">{blogPost()}</div>;
};

export default BlogTile;
