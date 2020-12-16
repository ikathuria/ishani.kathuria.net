import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/components/header.module.css";

export default function ProjectHeader() {
  const router = useRouter();

  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="sm">
      <Navbar.Toggle
        data-target="responsive-navbar-nav"
        aria-controls="responsive-navbar-nav"
        aria-label="Toggle navigation"
      />

      <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "100%" }}>
        <Nav className="flex-column mx-auto" style={{ height: "100%" }}>
          <Nav.Link
            className={
              router.pathname === "/"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/"
          >
            home
          </Nav.Link>

          <Nav.Link
            className={styles.navItem}
            href="/IshaniKathuria_resume.pdf"
            target="_blank"
          >
            resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
