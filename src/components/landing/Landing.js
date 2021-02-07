import React, { useState, useEffect } from "react";
import backgroundImage1 from "../../imgs/backgroundImage1.png";
import backgroundImage2 from "../../imgs/backgroundImage2.png";
import ourServicesImg1 from "../../imgs/ourServicesImg1.png";
import ourServicesImg2 from "../../imgs/ourServicesImg2.png";
import ourServicesImg3 from "../../imgs/ourServicesImg3.png";
import "./landing.css";
import { Link } from "react-router-dom";
import BlogTile from "../blog/BlogTile";

const Landing = () => {
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40xenavision";
  const [myBlog, setMyBlog] = useState([]);

  useEffect(() => {
    fetch(rss2json)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
      });
  }, [rss2json]);

  function displayBlogs() {
    return (
      myBlog.items &&
      myBlog.items.slice(0, 3).map((blog) => {
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }

  return (
    <div className="landingComponent">
      <div className="showBackgroundImage">
        <img
          className="backgroundImage1"
          src={backgroundImage1}
          alt="backgroundImage1"
        />
        <div className="landingTexts">
          <h1 className="landingH1">Best Way to Capture Emergency! </h1>
          <h2 className="landingH2">
            Activity Recognition
            <br />
            R&D Coming Soon!{" "}
          </h2>
          <div className="landingLinkDiv">
            <Link
              to={"/contact"}
              className="landingLink"
              style={{ textDecoration: "none" }}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="ourServicesGeneralOuter">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "30px",
          }}
        >
          Our Services
        </h1>
      </div>
      <div className="ourServices" id="ourServices">
        <div className="ourServicesImg1Outer">
          <img
            className="ourServicesImg1"
            src={ourServicesImg1}
            alt="ourServicesImg1"
          />
          <h2 className="ourServicesh">Activity Recognition</h2>
          <p className="ourServicesP">
            Xena Vision works on “Activity Recognition”​ and “Human Behavior
            Analysis”​. At our company, provide you an intelligent way of
            capturing happenings all around you. We work closely to our clients
            throughout our process to ensure the recognition outcomes are
            relevant. We are committed to provide clean, in-depth real-time
            evaluations.
          </p>
        </div>
        <div className="ourServicesImg2Outer">
          <img
            className="ourServicesImg2"
            src={ourServicesImg2}
            alt="ourServicesImg2"
          />
          <h2 className="ourServicesh">Behavior Analysis</h2>
          <p className="ourServicesP">
            Activity Recognition Package Powered Behavior Solution. By the help
            of initial analysis on client’s data, we perform multiple quality
            checks. These tests are included in the price of the analysis
            package. After testing, we deliver the results to our clients.{" "}
          </p>
        </div>
        <div className="ourServicesImg3Outer">
          <img
            className="ourServicesImg3"
            src={ourServicesImg3}
            alt="ourServicesImg3"
          />
          <h2 className="ourServicesh">Emotion Recognition</h2>
          <p className="ourServicesP">
            The world of science and technology can be hard to keep up with.
            That’s why our goal is to provide our clients high-quality visual
            analytics. No matter the cultural origin, we focus on generating
            emotion models to be able to comment on psychological states and
            intuitions.
          </p>
        </div>
      </div>
      <br />
      <div className="showBackgroundImage2">
        <div className="backgroundImage2">
          <img
            className="backgroundImage2"
            src={backgroundImage2}
            alt="backgroundImage2"
          />
          <div className="landingSecondTexts">
            <h1 className="landingH1">Subscribe </h1>
            <h2 className="landingH2">
              Sign up to hear from us about specials, sales, and events.
            </h2>
            <input placeholder="Your email adress" className="inputLanding" />
            <button className="landingEmailSubmit">Send</button>
          </div>
        </div>
      </div>
      <br />

      <div
        className="landingBlog"
        style={{ overflow: "auto", height: "488px", paddingBottom: "20px" }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "30px",
          }}
        >
          Xena Vision Blog
        </h1>
        {displayBlogs()}
      </div>
    </div>
  );
};

export default Landing;
