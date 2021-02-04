import React from "react";
import "./reviews.css";
import ComingSoon from "../../imgs/coming-soon.png";

export default function Reviews() {
  return (
    <div className="reviewsComponent" style={{ height: "600px" }}>
      <h1>Reviews</h1>
      <img
        className="reviewImage"
        src={ComingSoon}
        alt="ComingSoon"
        style={{ width: "50%" }}
      />
    </div>
  );
}
