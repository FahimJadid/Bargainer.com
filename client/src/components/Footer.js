import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>Bargainer.com &copy; {currentDate} Fahim Al Jadid</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
