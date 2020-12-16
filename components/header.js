import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/components/header.module.css";
import React, { useEffect, useState, useRef } from "react";

export default function Header() {
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
              router.pathname === "/#about"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/#about"
          >
            about
          </Nav.Link>

          <Nav.Link
            className={
              router.pathname === "/#projects"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/#projects"
          >
            projects
          </Nav.Link>

          <Nav.Link
            className={
              router.pathname === "/#skills"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/#skills"
          >
            skills
          </Nav.Link>

          <Nav.Link
            className={
              router.pathname === "/#art"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/#art"
          >
            art
          </Nav.Link>

          <Nav.Link
            className={
              router.pathname === "/#contact"
                ? styles.active + " " + styles.navItem
                : styles.navItem
            }
            href="/#contact"
          >
            contact
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
