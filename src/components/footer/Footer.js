import React from "react";
import "./footer.css";
import XenaLogo from "../../imgs/xenavision_logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyPrivacyPolicy(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Privacy Policy</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyFAQ(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>MyFAQ</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Footer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="footerComponent">
      <div className="footerUpper">
        <div className="footerUpperInner1">
          <ul className="footerList">
            <li></li>

            <Link to={"/"} style={{ textDecoration: "none", margin: "auto" }}>
              <li>Home</li>
            </Link>
            <a
              href="#ourServices"
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Our Services</li>
            </a>
            <Link
              to={"/reviews"}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Reviews</li>
            </Link>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <li>Contact</li>
            </Link>
            <Link
              to={"/"}
              style={{ textDecoration: "none", margin: "auto" }}
              onClick={() => setModalShow(true)}
            >
              <li>Privacy Policy</li>
            </Link>
            <MyPrivacyPolicy
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Link
              to={"/"}
              style={{ textDecoration: "none", margin: "auto" }}
              onClick={() => setModalShow(true)}
            >
              <li>FAQ</li>
            </Link>
            <MyFAQ show={modalShow} onHide={() => setModalShow(false)} />
          </ul>
        </div>
        <div className="footerUpperInner2">
          <Link
            to={{
              pathname: "https://www.facebook.com/xenavision/",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#3AB8E8" }}
          >
            <FaFacebookF
              style={{
                color: "#bcbcbc",
                border: "2px solid #bcbcbc",
                borderRadius: "15px",
                width: "auto",
                padding: "5px",
                position: "relative",
                right: "20px",
                fontSize: "xx-large",
              }}
            />
          </Link>
          <Link
            to={{
              pathname: "https://twitter.com/xenavision",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#3AB8E8" }}
          >
            <FaTwitter
              style={{
                color: "#bcbcbc",
                border: "2px solid #bcbcbc",
                borderRadius: "15px",
                width: "auto",
                padding: "5px",
                position: "relative",
                right: "15px",
                fontSize: "xx-large",
              }}
            />{" "}
          </Link>
          <Link
            to={{
              pathname: "https://www.instagram.com/xena.vision/",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#3AB8E8" }}
          >
            <FaInstagram
              style={{
                color: "#bcbcbc",
                border: "2px solid #bcbcbc",
                borderRadius: "15px",
                width: "auto",
                padding: "5px",
                position: "relative",
                right: "10px",
                fontSize: "xx-large",
              }}
            />
          </Link>
          <Link
            to={{
              pathname: "https://tr.linkedin.com/company/xenavision",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "#3AB8E8" }}
          >
            <FaLinkedinIn
              style={{
                color: "#bcbcbc",
                border: "2px solid #bcbcbc",
                borderRadius: "15px",
                width: "auto",
                padding: "5px",
                position: "relative",
                right: "5px",
                fontSize: "xx-large",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="footerLower">
        <Link to={"/"} style={{ textAlign: "center" }}>
          <img src={XenaLogo} alt="Xena Vision Logo" style={{ width: "25%" }} />
        </Link>
        <div className="verticalLine"></div>
        <h3 className="footerH3">
          Copyright © 2021 Xena Vision - All Rights Reserved.
        </h3>
      </div>
    </div>
  );
}
