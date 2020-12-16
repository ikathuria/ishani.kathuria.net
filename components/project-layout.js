import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Badge,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import styles from "../styles/components/projects.module.css";

export default function Layout({ meta, children, project }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <div
        className={styles.heading}
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, .6), rgba(0, 0, 0, .9)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px), url('${meta.img}')`,
        }}
      >
        <h1 className={styles.glitch} data-text={meta.title}>
          {meta.title}
        </h1>
      </div>

      <Container className={styles.content}>
        <Row style={{ justifyContent: "center" }}>
          <ButtonGroup className={styles.buttons}>
            <Button
              className={styles.btn}
              variant="outline-dark"
              href={meta.code}
              target="_blank"
              link-text="On Github!"
            >
              <span>See the code!</span>
            </Button>

            <Button
              className={styles.btn}
              variant="outline-dark"
              href={meta.view}
              target="_blank"
              link-text="Let's Go!"
            >
              <span>View Project!</span>
            </Button>
          </ButtonGroup>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <h2 style={{ width: "100%", textAlign: "center" }}>
            {meta.tags.map((item) => (
              <Badge variant="dark" style={{ margin: "1%" }}>
                {item}
              </Badge>
            ))}
          </h2>
        </Row>

        <Row className={styles.description}>{meta.description}</Row>

        <Row className={styles.imageContainer}>
          {meta.images.map((item) => (
            <div className={styles.box}>
              <img src={item}></img>
            </div>
          ))}
        </Row>

        <Row>{children}</Row>

        {project && (
          <Row className={styles.back}>
            <Button
              href="/projects"
              variant="outline-dark"
              className={styles.backButton}
            >
              Back to Projects
            </Button>
          </Row>
        )}
      </Container>
    </>
  );
}
