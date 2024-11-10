/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
    transition: 'all 0.3s ease',  // Animation for hover effect
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);  // Loading state
  const [expanded, setExpanded] = useState(false);
  const form = useRef();

  const handleAccordionChange = (isExpanded) => {
    setExpanded(isExpanded);
  };

  const handleNavClick = (navId) => {
    if (navId === "#works") {
      handleAccordionChange("panel1")(null, true);
    } else {
      setExpanded(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation

    emailjs.sendForm('service_2ysz9l9', 'template_2x8o1ki', form.current, 'venkWDEDiCJqPhQ4t')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your email has been sent!',
            showConfirmButton: false,
            timer: 1500
          });
      }, (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed to send email. Try again!',
            showConfirmButton: false,
            timer: 1500
          });
      })
      .finally(() => setLoading(false));  // Stop loading
    e.target.reset();
  };

  const greetings = "Let’s Talk Ideas!";

  return (
    <section id="contact">
      <h1 className="contact_msg">
          {greetings}
        </h1>
      <div className="contact">
        <div className="_form_wrapper">
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <TextField
              id="outlined-name-input"
              label="Name"
              type="text"
              size="small"
              variant="filled"
              name="name"
              className={classes.formfield}
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              size="small"
              variant="filled"
              name="email"
              className={classes.formfield}
            />
            <TextField
              id="outlined-message-input"
              label="Message"
              size="small"
              multiline
              minRows={5}
              variant="filled"
              name="message"
              className={classes.formfield}
            />
            <button type="submit" className="submit-btn">
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  <i className="fas fa-terminal"></i>
                  <Typography component='span'> Send Message</Typography>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
