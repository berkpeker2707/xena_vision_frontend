import React from "react";
import "./dashboard.css";
import video1 from "./video1.png";
import video2 from "./video2.png";
import mockGraph1 from "./mockGraph1.png";
import mockGraph2 from "./mockGraph2.png";
import mockGraph3 from "./mockGraph3.png";
import mockGraph4 from "./mockGraph4.png";

export default function Dashboard() {
  return (
    <div className="dashboardComponent">
      <h1>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      <div className="videoBoxes">
        <div className="innerVideoBoxes">
          <div className="videoSingle1">
            <h2>01</h2>
            <img className="video" src={video1} alt="video1" />
            <div className="videoPar">
              <p className="videoSinglePar" style={{ color: "#20BEB1" }}>
                Total People: 2
              </p>
              <p className="videoSinglePar" style={{ color: "#B71616" }}>
                Total Violation: 1
              </p>
            </div>
          </div>
          <div className="videoSingle2">
            <h2>02</h2>
            <img className="video" src={video2} alt="video1" />
            <div className="videoPar">
              <p className="videoSinglePar" style={{ color: "#20BEB1" }}>
                Total People: 2
              </p>
              <p className="videoSinglePar" style={{ color: "#B71616" }}>
                Total Violation: 1
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2>How Many People Enters</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="graph1OuterBox">
        <div className="graph1InnerBox">
          <img className="graph1" id="graph" src={mockGraph1} alt="graph1" />
        </div>
      </div>
      <hr />
      <h2>Box3</h2>
      <div className="graph2OuterBox">
        <div className="graph2InnerBox">
          <img className="graph2" id="graph" src={mockGraph2} alt="graph2" />
        </div>
      </div>
      <hr />
      <h2>Box4</h2>
      <div className="graph3OuterBox">
        <div className="graph3InnerBox">
          <img className="graph3" id="graph" src={mockGraph3} alt="graph3" />
        </div>
      </div>
      <hr />
      <h2>Box5</h2>
      <div className="graph4OuterBox">
        <div className="graph4InnerBox">
          <img className="graph4" id="graph" src={mockGraph4} alt="graph4" />
        </div>
      </div>
    </div>
  );
}
