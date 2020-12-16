import Head from "next/head";
import theProjects from "../data/projects-data";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import styles from "../styles/pages/projects.module.css";
import React, { useEffect, useState, useRef } from "react";
import { Animated } from "react-animated-css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects ~ Ishani Kathuria</title>
      </Head>

      <Container fluid className={styles.main}>
        <Row>
          <Col lg={2}>
            <h1 className={styles.header}>Projects.</h1>
          </Col>

          <Col lg={10}>
            <Container>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={3000}
                isVisible={true}
              >
                <CardColumns className={styles.row} id="projects">
                  {theProjects.map(({ slug, title, date, excerpt, tags }) => (
                    <Card className={styles.card}>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          {title}
                        </Card.Title>

                        <Card.Subtitle className={styles.cardDate}>
                          {date}
                        </Card.Subtitle>

                        <Card.Text className={styles.cardExcerpt}>
                          {excerpt}
                        </Card.Text>

                        <Link href={`/projects/${slug}`}>
                          <a className={styles.cardLink}>
                            Click to see project
                          </a>
                        </Link>
                      </Card.Body>

                      <Card.Footer className={styles.cardTags}>
                        {tags.map((item) => (
                          <div>{item}</div>
                        ))}
                      </Card.Footer>
                    </Card>
                  ))}
                </CardColumns>
              </Animated>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
