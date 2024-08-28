import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import AuthForm from "../../components/authForm";
import authImage from "../../assets/auth.png";

const AuthPage = () => {
  return (
    <Container>
      <Row className="vh-100">
        <Col className="d-flex">
          <Stack className="justify-content-center align-items-center">
            <Image src={authImage} height={300} width={300} />
            <h3>LIBRARY MANAGEMENT SYSTEM</h3>
          </Stack>
        </Col>

        <Col className="d-flex justify-content-center align-items-center">
          <AuthForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
