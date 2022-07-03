import React,{ useState} from "react";
import { Container, Row, Col ,Toast ,ToastContainer} from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
    <footer className="footer">
      <br></br>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 className="logo">Code Sorcerers</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" onClick={() => setShow(true)}>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    <ToastContainer className="p-3" position="top-end">
    <Toast onClose={() => setShow(false)} bg='primary' show={show} delay={1500} autohide>
          <Toast.Header >
            <strong className="me-auto">We are only available here</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
        </Toast>
        </ToastContainer>
    </React.Fragment>
  )
}
