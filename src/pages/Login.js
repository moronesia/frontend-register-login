import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from "../redux/login/loginAction";

function Login() {
  const loginData = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      navigate("/profile");
    }
    // eslint-disable-next-line
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(
      userLoginAction.login(loginData.email, loginData.password, navigate)
    );
  };

  return (
    <div
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "100px",
      }}
    >
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              dispatch(userLoginAction.setEmail(e.target.value));
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              dispatch(userLoginAction.setPassword(e.target.value));
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Masuk
        </Button>
      </Form>
      <br />
      <p>Belum punya akun?</p>
      <p>
        <Link to="/">Daftar</Link>
      </p>
    </div>
  );
}

export default Login;
