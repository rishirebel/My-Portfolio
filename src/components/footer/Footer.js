import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0.5, 1),
    marginTop: 'auto',
    textAlign: 'center',
  },
  link: {
    margin: theme.spacing(1),
  },
  copyright: {
    marginTop: theme.spacing(2),
    fontSize: '0.875rem',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" className={classes.copyright}>
          &copy; {new Date().getFullYear()} CyberRishi.com. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};
