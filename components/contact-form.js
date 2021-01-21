import { useForm } from '@formspree/react';
import { Form, Button } from "react-bootstrap";
import styles from "../styles/pages/contact.module.css";

export default function MyForm() {
  const [state, handleSubmit] = useForm("xvovlaed");

  if (state.succeeded) {
    return <div>My elves will get your message to me ASAP!</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          className={styles.formField}
          required
          placeholder="John Doe"
        />
      </Form.Group>

      <Form.Group controlId="formGroupEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          className={styles.formField}
          id="email"
          type="email"
          name="email"
          required
          placeholder="john@doe.com"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Your message</Form.Label>
        <Form.Control
          className={styles.formField}
          as="textarea"
          type="text"
          name="message"
          required
          rows={3}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Form.Group>

      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? "Launching missile!" : "Send message"}
      </Button>
    </Form>
  );
}