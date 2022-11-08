import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

const LogIn = () => {
  return (
    <>
      <div className="p-4 box">
        <h2>Log In</h2>
        <Form>
          <Form.Group className="mb-3" controlId="fromBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Adress"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="fromBasicPassword">
            <Form.Control type="password" placeholder="password"></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" />
        </div>
        <div className="p-4 box mt-3 text-center">
          Dont have an account? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </>
  );
};
export default LogIn;
