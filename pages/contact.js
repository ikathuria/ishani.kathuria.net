import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from "../styles/pages/contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact ~ Ishani Kathuria</title>
      </Head>

      <Container className={styles.main}>
        <div className={styles.img}></div>

        <div className={styles.color}></div>

        <Row className={styles.header}>
          <h1>Contact.</h1>
        </Row>

        <Row>
          <Col md={8}>
            <Card className={styles.card}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className={styles.formField}
                      placeholder="John Doe"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className={styles.formField}
                      type="email"
                      placeholder="john@doe.com"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                      className={styles.formField}
                      as="textarea"
                      rows={3}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                  </Form.Group>

                  <Button type="submit">Launch Missile!</Button>
                </Form>
              </Card.Body>

              <Card.Footer className={styles.social}>
                <div className={styles.list}>
                  <ul>
                    <li className={styles.socialLink}>
                      <a href="https://github.com/ikathuria" target="_blank">
                        <FontAwesomeIcon
                          icon={["fab", "github"]}
                          className={styles.icon}
                        />
                      </a>
                    </li>

                    <li className={styles.socialLink}>
                      <a
                        href="https://www.linkedin.com/in/ishani-kathuria/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={["fab", "linkedin-in"]}
                          className={styles.icon}
                        />
                      </a>
                    </li>

                    <li className={styles.socialLink}>
                      <a
                        href="https://www.instagram.com/ii.meraki.ii/?hl=en"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          className={styles.icon}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
