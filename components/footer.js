import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
  const router = useRouter();

  return (
    <Navbar className={styles.main} collapseOnSelect bg="dark" variant="dark">
      <Nav className="mx-auto flex-column">
        <Nav.Item className={styles.typewriter + " " + styles.navItem}>
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
        </Nav.Item>

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

        <Nav.Item className={styles.copyright + " " + styles.navItem}>
          <p>©2020 Ishani Kathuria</p>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
