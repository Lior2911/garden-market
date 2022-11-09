import React, { useState } from "react";
import { Form, Button ,Alert } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2>Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="fromBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Adress"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="fromBasicPassword">
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
        </Form>
        <hr />
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/LogIn">Log In</Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
