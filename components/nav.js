import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { Navbar, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/nav.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <Navbar className={styles.main} expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={styles.flexNav + ' flex-column mx-auto'}>
          <Nav.Item className={styles.navItem}>
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
          </Nav.Item>

          {/* social icons */}
          <ul className={styles.social + " " + styles.navItem}>
            <li>
              <Nav.Item>
                <a href="https://github.com/ikathuria" target="_blank">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "github"]}
                  />
                </a>
              </Nav.Item>
            </li>

            <li>
              <Nav.Item>
                <a
                  href="https://www.linkedin.com/in/ishani-kathuria/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "linkedin-in"]}
                  />
                </a>
              </Nav.Item>
            </li>

            <li>
              <Nav.Item>
                <a
                  href="https://www.instagram.com/ii.meraki.ii/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={["fab", "instagram"]}
                  />
                </a>
              </Nav.Item>
            </li>
          </ul>

          <Nav.Item className={styles.navItem}>
            <div className={styles.typewriter}>
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
            </div>
          </Nav.Item>

          <Nav.Item className={styles.copyright + " " + styles.navItem}>
            <p>©2020 Ishani Kathuria</p>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
