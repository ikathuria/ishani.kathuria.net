import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/nav.module.css";

export default function Nav() {
  const router = useRouter();

  <svg>
    <defs>
      <filter id="distortion">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0"
          numOctaves="1"
          result="warp"
        ></feTurbulence>
        <feOffset dx="-90" result="warpOffset"></feOffset>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="30"
          in="SourceGraphic"
          in2="warpOffset"
        ></feDisplacementMap>
      </filter>
    </defs>
  </svg>;

  return (
    <Container fluid className={styles.main}>
      {/* header */}

      <Row className={styles.row + " " + styles.header}>
        <Link href="/" passhref>
          <a
            className={
              router.pathname === "/"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
          >
            <span>h</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </a>
        </Link>

        <Link href="/about" passhref>
          <a
            className={
              router.pathname === "/about"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
          >
            <span>a</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </a>
        </Link>

        <Link href="/projects" passhref>
          <a
            className={
              router.pathname === "/projects"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
          >
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </a>
        </Link>

        <Link href="/contact" passhref>
          <a
            className={
              router.pathname === "/contact"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
          >
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </a>
        </Link>

        <Link href="/IshaniKathuria_resume.pdf" passhref>
          <a className={styles.navItem} target="_blank">
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>u</span>
            <span>m</span>
            <span>e</span>
          </a>
        </Link>
      </Row>

      {/* copyright */}

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
    </Container>
  );
}
