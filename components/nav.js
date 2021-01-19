import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/nav.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar className={styles.main} expand="lg" fixed="top" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.nav}>
          <Nav.Link
            className={
              router.pathname === "/"
                ? styles.active + " " + styles.menuItem
                : styles.menuItem
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
                ? styles.active + " " + styles.menuItem
                : styles.menuItem
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
                ? styles.active + " " + styles.menuItem
                : styles.menuItem
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
                ? styles.active + " " + styles.menuItem
                : styles.menuItem
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
            className={styles.menuItem}
            target="_blank"
            href="/IshaniKathuria_Resume.pdf"
          >
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>u</span>
            <span>m</span>
            <span>e</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
