/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import { CustomAccordion } from "../customAccordion/CustomAccordion";

import profile from '../../assets/profile.png';
import './About.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 8rem',
  },
  imageWrapper: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: `url(${profile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(2),
  },
  contactBtn: {
    marginTop: theme.spacing(2),
    backgroundColor: '#464646',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#bf1000',
    },
  },
  aboutText: {
    margin: '1.5rem 0',
    fontSize: '1.25rem',  // Increased font size
    fontWeight: 'bold',   // Bolder text
    lineHeight: '2',      // Increased line height for better readability
    padding: '0 6rem',
  },
}));

export const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const greetings = "Professional Prelude";
  const aboutme = `I'm ${FirstName} ${LastName}, CTO of Intelligaia with over ten years of experience in software engineering, specializing in developing digital solutions across industries. Leading our technology team, I make critical decisions on platforms, architecture, and design while overseeing product development and deployment. I thrive on tackling challenges, breaking down complex tasks, and fostering innovation. Passionate about software architecture and emerging technologies like AI and Web3, I'm dedicated to driving excellence in every project.`;

  return (
    <section id="about" className={classes.main}>
      <hr className="section-divider" /> {/* Top Divider */}
      <div className={classes.aboutContent}>
        {/* Profile Image */}
        <div className={classes.imageWrapper}></div>

        {/* Greetings */}
        <Typography component="h2" variant="h4" style={{ fontWeight: '700', fontSize: '2rem' }}>
          <TextDecrypt text={greetings} />
        </Typography>

        {/* About Me Text */}
        <Typography className={classes.aboutText} component="p">
          {aboutme}
        </Typography>

        {/* Contact Button
        <a href="#contact">
          <Button variant="contained" className={classes.contactBtn}>
            <i className="fas fa-terminal"></i>
            <Typography component="span" style={{ marginLeft: '8px' }}>Send me a message</Typography>
          </Button>
        </a> */}
      </div>
      <hr className="section-divider" /> {/* Bottom Divider */}
    </section>
  );
};
