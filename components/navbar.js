import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/nav.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar className={styles.main} expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column">
          <Row className={styles.row + " " + styles.header}>
            <Nav.Link
              className={
                router.pathname === "/"
                  ? styles.active + " " + styles.navItem
                  : styles.navItem
              }
              href="/"
            >
              <span>h</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </Nav.Link>

            <Nav.Link
              className={
                router.pathname === "/about"
                  ? styles.active + " " + styles.navItem
                  : styles.navItem
              }
              href="/about"
            >
              <span>a</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </Nav.Link>

            <Nav.Link
              className={
                router.pathname === "/projects"
                  ? styles.active + " " + styles.navItem
                  : styles.navItem
              }
              href="/projects"
            >
              <span>p</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </Nav.Link>

            <Nav.Link
              className={
                router.pathname === "/contact"
                  ? styles.active + " " + styles.navItem
                  : styles.navItem
              }
              href="/contact"
            >
              <span>c</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </Nav.Link>

            <Nav.Link
              className={styles.navItem}
              target="_blank"
              href="/IshaniKathuria-Resume.pdf"
            >
              <span>r</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </Nav.Link>
          </Row>

          <Row className={styles.row + " " + styles.footer}>
            <Row className={styles.social}>
              <Col>
                <a href="https://github.com/ikathuria" target="_blank">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "github"]}
                  />
                </a>
              </Col>

              <Col>
                <a
                  href="https://www.linkedin.com/in/ishani-kathuria/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "linkedin-in"]}
                  />
                </a>
              </Col>

              <Col>
                <a
                  href="https://www.instagram.com/ii.meraki.ii/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "instagram"]}
                  />
                </a>
              </Col>
            </Row>

            <Row className={styles.typewriter}>
              <Typewriter
                options={{
                  strings: [
                    "Humans are the only animals that blush.",
                    "The moon has moonquakes.",
                    "Kids ask 300 questions a day.",
                    "Don't have kids.",
                    "The human body literally glows.",
                    "The first computer was invented in the 1940s.",
                    "The unicorn is the national animal of Scotland.",
                    "Rabbits can't puke.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 25,
                }}
              />
            </Row>

            <Row className={styles.copyright}>
              <p>©2020 Ishani Kathuria</p>
            </Row>
          </Row>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
