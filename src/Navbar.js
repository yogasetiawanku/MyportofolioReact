import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bgnav">
      <Container>
        <Navbar.Brand
          className="text-light border border-info"
          style={{
            fontSize: "15px",
            backgroundColor: " rgba(153, 0, 255, 0.345)",
            width: "110px",
            padding: "6px",
            borderRadius: "5px",
          }}
        >
          Yoga Setiawan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link exact to="/" className="nav-link text-light">
              Home
            </Link>
            <Link exact to="/about" className="nav-link text-light">
              About
            </Link>
            <Link to="/service" className="nav-link text-light">
              Service
            </Link>
            <Link to="/portofolio" className="nav-link text-light">
              Portofolio
            </Link>
            <Link to="/contact" className="nav-link text-light">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
