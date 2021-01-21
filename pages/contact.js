import Head from "next/head";
import MyForm from "../components/contact-form.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from "../styles/pages/contact.module.css";
import React from "react";

export default function Contact() {

  return (
    <>
      <Head>
        <title>Contact ~ Ishani Kathuria</title>
      </Head>

      <Container className={styles.main}>
        <div className={styles.img}></div>

        <Row className={styles.header}>
          <h1>Contact.</h1>
        </Row>

        <Row>
          <Col md={8}>
            <Card className={styles.card}>
              <Card.Body>
                <MyForm />
              </Card.Body>
              <Card.Footer className={styles.social}>
                <div className={styles.socialList}>
                  <ul>
                    <li className={styles.socialLink}>
                      <a href="https://github.com/ikathuria" target="_blank">
                        <FontAwesomeIcon
                          icon={["fab", "github"]}
                          className={styles.iconSocial}
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
                          className={styles.iconSocial}
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
                          className={styles.iconSocial}
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
