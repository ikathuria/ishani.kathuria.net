import Head from "next/head";
import theProjects from "../data/projects-data";
import Link from "next/link";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home ~ Ishani Kathuria</title>
      </Head>

      {/* jumbotron */}

      <div>
        <Jumbotron fluid className={styles.jumbotron}>
          <Container className={styles.header}>
            <h1>
              <b>Ishani</b> Kathuria.
            </h1>
          </Container>

          <div>
            <svg
              className={styles.waves}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className={styles.parallax}>
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255, 255, 255, 0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255, 255, 255, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255, 255, 255, 0.3)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={7}
                  fill="rgb(255, 255, 255)"
                />
              </g>
            </svg>
          </div>

          <div className={styles.bottomContent}>
            <FontAwesomeIcon
              icon={["fas", "arrow-down"]}
              className={styles.icon}
              size="2x"
            />
          </div>
        </Jumbotron>
      </div>

      {/* --- MAIN --- */}

      <div className={styles.main}>
        {/* about */}

        <section className={styles.mainRow + " " + styles.about} id="about">
          <h2>Who am I?</h2>

          <Container className={styles.description}>
            <p>
              I am Ishani Kathuria, owner of this tiny little part of the
              internet I call home. I’m a typical introvert who loves
              programming, art and books. Scroll down to see my latest projects
              or go over to the about sectipn to read more about me :)
            </p>
          </Container>
        </section>

        {/* projects */}

        <section
          className={styles.mainRow + " " + styles.projects}
          id="projects"
        >
          <h2>Latest Projects.</h2>
          <Container>
            <Row className={styles.projectsRow}>
              {theProjects.slice(0, 3).map((project) => (
                <Col md={4} className={styles.cardContainer}>
                  <div
                    className={styles.card}
                    style={{ "--image": `url(${project.img})` }}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <a>
                        <div className={styles.cardDisplay}>
                          <h3 style={{ fontSize: "2rem" }}>{project.title}</h3>

                          <h4 style={{ fontSize: "1.3rem" }}>{project.date}</h4>
                        </div>

                        <div className={styles.cardHover}>
                          <h3 className={styles.projectTitle}>
                            {project.title}
                          </h3>
                          <p>{project.excerpt}</p>
                          <p style={{ color: "#77FF9B", fontWeight: "bold" }}>
                            Click to see project
                          </p>
                        </div>
                      </a>
                    </Link>

                    <div className={styles.cardBorder}></div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* art */}

        <section className={styles.mainRow + " " + styles.art} id="art">
          <Container fluid className={styles.artContainer}>
            <Row className={styles.artRow}>
              <Col lg={6} className={styles.artCol + " " + styles.artImg}>
                <Link href="/projects">
                  <a className={styles.artLink}>
                    <svg
                      height="325"
                      viewBox="45 60 400 320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#fff"
                        d="M 90 210 C 90 180 90 150 150 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 330 150 C 390 150 390 180 390 210 C 390 240 390 270 330 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 150 270 C 90 270 90 240 90 210"
                        mask="url(#knockout-text)"
                      ></path>
                      <mask id="knockout-text">
                        <rect
                          width="100%"
                          height="100%"
                          fill="#fff"
                          x="0"
                          y="0"
                        />
                      </mask>
                      <text x="110" y="227" fill="#000">
                        check it out {"->"}
                      </text>
                    </svg>
                  </a>
                </Link>
              </Col>

              <Col
                lg={6}
                className={styles.artCol + " " + styles.artDescription}
              >
                <div style={{ margin: "0 5%" }}>
                  <h2>My creative ambitions</h2>

                  <p>
                    This is another one of my newest projects made with next.js.
                    It is a showcase of my writings, pictures I've taken of
                    beautiful things and drawings I've created.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
