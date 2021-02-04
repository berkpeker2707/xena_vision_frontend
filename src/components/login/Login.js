import React from "react";
import "./login.css";
import loginBackground from "../../imgs/loginBackground.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="loginComponent"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "700px 700px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="loginOuterComponent">
        <h2 className="loginComponentH2">Login</h2>
        <div className="emailGroup">
          <label className="emailLoginLabel">Email</label>
          <input
            className="inputEmailLogin"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="passwordGroup">
          <label className="passwordLoginLabel">Password</label>
          <input
            className="inputPasswordLogin"
            type="password"
            placeholder="*****"
          />
        </div>
        <div className="staylogged">
          <input
            className="stayloggedInput"
            type="checkbox"
            name="staylogged"
            id="staylogged"
          />
          <label className="stayloggedLabel" for="staylogged">
            Keep me logged in
          </label>
        </div>
        <div>
          <Link
            to={"#"}
            className="loginLink"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            to={"/register"}
            className="registerLink"
            style={{ textDecoration: "none" }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
