import React from "react";
import "./register.css";
import loginBackground from "../../imgs/loginBackground.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div
      id="registerComponent"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "700px 700px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div id="registerOuterComponent">
        <h2 id="registerComponentH2">Register</h2>
        <div id="emailGroup">
          <label id="emailRegisterLabel">Email</label>
          <input
            id="inputEmailRegister"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div id="passwordGroup">
          <label id="passwordRegisterLabel">Password</label>
          <input
            id="inputPasswordRegister"
            type="password"
            placeholder="*****"
          />
        </div>

        <div>
          <Link to={"#"} id="registerLink" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
