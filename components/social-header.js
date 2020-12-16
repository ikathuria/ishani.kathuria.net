import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/social-header.module.css";

export default function SocialHeader() {
  const router = useRouter();

  return (
    <Navbar className={styles.navbar} collapseOnSelect expand="sm">
      <Navbar.Toggle
        data-target="responsive-navbar-nav"
        aria-controls="responsive-navbar-nav"
        aria-label="Toggle navigation"
      />

      <Navbar.Collapse id="responsive-navbar-nav" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Nav className={styles.nav}>
          <Nav.Link href="https://github.com/ikathuria" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={["fab", "github"]} />
          </Nav.Link>

          <Nav.Link
            href="https://www.linkedin.com/in/ishani-kathuria/"
            target="_blank"
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={["fab", "linkedin-in"]}
            />
          </Nav.Link>

          <Nav.Link
            href="https://www.instagram.com/ii.meraki.ii/?hl=en"
            target="_blank"
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={["fab", "instagram"]}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
