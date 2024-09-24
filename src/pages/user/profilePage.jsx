import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { updateUserProfileAction } from "./userActions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { first_name, last_name, email } = user;

  const [profileData, setProfileData] = useState({
    first_name: first_name || "",
    last_name: last_name || "",
    email: email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfileAction(profileData)); // Dispatch action to update profile
  };

  return (
    <Container>
      <h2>Profile</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={profileData.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group controlId="lastName" className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={profileData.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={profileData.email}
            disabled
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default ProfilePage;
