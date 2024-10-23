import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png"; // Adjust the path based on where your PNG file is located

const useStyles = makeStyles((theme) => ({
  imgHover: {
    width: "100%", // Adjust as needed
    height: "auto",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.05)", // Slight zoom on hover
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <img 
      src={logo} 
      alt="Company Logo"
      className={classes.imgHover}
    />
  );
};
