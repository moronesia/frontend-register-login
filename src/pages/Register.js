import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userRegisterAction from "../redux/register/registerAction";

function Register() {
  const registerData = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userRegisterAction.resetForm());

    let token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(
      userRegisterAction.register(
        registerData.email,
        registerData.password,
        registerData.fullName,
        navigate
      )
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
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            onChange={(e) =>
              dispatch(userRegisterAction.setFullName(e.target.value))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              dispatch(userRegisterAction.setEmail(e.target.value))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) =>
              dispatch(userRegisterAction.setPassword(e.target.value))
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Daftar
        </Button>
      </Form>
      <br />
      <p>Sudah punya akun?</p>
      <p>
        <Link to="/login">Masuk</Link>
      </p>
    </div>
  );
}

export default Register;
