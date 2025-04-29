import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-primary text-white py-4 shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/">
              <img src={logo} alt="Reach APAC Logo" className="w-12 md:w-16" />
            </Link>
            <nav className="space-x-6 text-base font-medium">
              <Link to="/" className="hover:text-accent">Home</Link>
              <Link to="/about" className="hover:text-accent">About</Link>
              <Link to="/get-involved" className="hover:text-accent">Get Involved</Link>
              <Link to="/contact" className="hover:text-accent">Contact</Link>
            </nav>
          </div>
        </header>
    );
}