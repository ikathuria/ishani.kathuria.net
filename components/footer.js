import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import styles from "../styles/components/footer.module.css";
import Typewriter from "typewriter-effect";

export default function Footer() {
  return (
    <Container fluid className={styles.main}>
      <Container className={styles.typewriter}>
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
      </Container>

      <p>©2020 Ishani Kathuria</p>
    </Container>
  );
}
