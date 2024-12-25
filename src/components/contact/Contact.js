import React, { useState, useRef } from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "1.5rem",
    transition: "all 0.3s ease", // Animation for hover effect
  },
  errorText: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "-1rem",
    marginBottom: "1rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const form = useRef();

  const validateEmail = (email) => {
    // Improved email regex validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.email.value; // Access the email field
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please provide a valid email address.",
      });
      return;
    }

    setEmailError(""); // Clear error if valid
    setLoading(true);

    emailjs
      .sendForm(
        "service_2ysz9l9",
        "template_2x8o1ki",
        form.current,
        "venkWDEDiCJqPhQ4t"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your email has been sent!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to send email. Please try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      )
      .finally(() => {
        setLoading(false);
        if (form.current) {
          form.current.reset();
        }
      });
  };

  const greetings = "Let’s Talk Ideas!";

  return (
    <section id="contact">
      <h1 className="contact_msg">{greetings}</h1>
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
              error={!!emailError}
              helperText={emailError}
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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Send Message</Typography>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
