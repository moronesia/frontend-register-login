import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import userProfileAction from "../redux/profile/profileAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      dispatch(userProfileAction.fetchProfile());
    }
    // eslint-disable-next-line
  }, []);
  const { user } = useSelector((state) => state.userProfile);

  if (user === null) {
    return <div>loading</div>;
  }
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "200px",
        }}
      >
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>Full Name: {user.user.name}</Card.Text>
          <Card.Text>Email : {user.user.email}</Card.Text>
          <Button variant="primary" onClick={logout} type="submit">
            Logout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
