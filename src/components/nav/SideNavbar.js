/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  // Check the current URL and set the active navigation on component mount
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      setActiveNav('projects');
    } else if (window.location.hash === '#about') {
      setActiveNav('#about');
    } else if (window.location.hash === '#contact') {
      setActiveNav('#contact');
    } else if (window.location.pathname === '/resume') {
      setActiveNav('#resume');
    } else {
      setActiveNav('#');
    }
  }, []);  // Runs once when the component mounts

  return (
    <nav>
      <a href="/" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>Home</Typography>
      </a>
      <a 
        href="/projects"
        onClick={() => setActiveNav('projects')}
        className={activeNav === 'projects' ? 'active' : ''}
      >
        <Typography>Projects</Typography>
      </a>
      <a href="/#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>About</Typography>
      </a>
      <a href="/#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>Contact</Typography>
      </a>
      <a href="/resume"
        onClick={() => setActiveNav('#resume')}
        className={activeNav === '#resume' ? 'active' : ''}
      >
        <Typography>Resume</Typography>
      </a>
    </nav>
  );
};
