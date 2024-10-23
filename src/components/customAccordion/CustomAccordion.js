/* eslint-disable react/prop-types */
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   accordionRoot: {
//     width: '100%',
//     boxShadow: 'none',
//     borderRadius: '12px', // Rounded corners for the accordion
//     marginBottom: '1rem', // Space between accordions
//     paddingLeft: theme.spacing(4),
//     paddingRight: theme.spacing(4),
//   },
//   accordionSummary: {
//     paddingLeft: theme.spacing(4),
//     paddingRight: theme.spacing(4),
//     backgroundColor: '#bf1000', // Closed state color
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#a80d00', // Darker shade on hover in closed state
//     },
//     borderRadius: '12px', // Rounded corners
//   },
//   accordionDetails: {
//     paddingLeft: theme.spacing(4),
//     paddingRight: theme.spacing(4),
//     // padding: theme.spacing(2),
//     backgroundColor: 'rgba(255, 0, 0, 0.2)', // Light red transparent background for open state
//     flexDirection: 'column',
//     borderRadius: '12px', // Rounded corners
//   },
//   expanded: {
//     paddingLeft: theme.spacing(4),
//     paddingRight: theme.spacing(4),
//     backgroundColor: 'rgba(255, 0, 0, 0.2)', // Light red transparent background when expanded
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//     accordionRoot: {
//       width: '100%',
//       boxShadow: 'none',
//       borderRadius: '12px',
//       marginBottom: '1rem',
//       paddingLeft: theme.spacing(4),
//       paddingRight: theme.spacing(4),
//     },
//     accordionSummary: {
//       paddingLeft: theme.spacing(4),
//       paddingRight: theme.spacing(4),
//       background: 'linear-gradient(135deg, #bf1000 0%, #000 100%)', // Gradient from red to black
//       color: '#fff',
//       '&:hover': {
//         background: 'linear-gradient(135deg, #a80d00 0%, #333 100%)', // Darker gradient on hover
//       },
//       borderRadius: '12px',
//     },
//     accordionDetails: {
//       paddingLeft: theme.spacing(4),
//       paddingRight: theme.spacing(4),
//       backgroundColor: 'rgba(191, 16, 0, 0.2)', // Light red transparent background for open state
//       flexDirection: 'column',
//       borderRadius: '12px',
//     },
//     expanded: {
//       paddingLeft: theme.spacing(4),
//       paddingRight: theme.spacing(4),
//       backgroundColor: 'rgba(191, 16, 0, 0.2)', // Maintain light red background when expanded
//     },
//   }));

const useStyles = makeStyles((theme) => ({
    accordionRoot: {
      width: '100%',
      boxShadow: 'none',
      borderRadius: '12px', // Rounded corners for the accordion
      marginBottom: '1rem', // Space between accordions
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.palette.background.default, // Use theme background
    },
    accordionSummary: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      background: theme.palette.type === 'light'
        ? 'linear-gradient(135deg, #bf1000 0%, #000 100%)'  // Light mode gradient
        : 'linear-gradient(135deg, #800000 0%, #333 100%)', // Dark mode gradient
      color: theme.palette.text.primary, // Dynamic text color from theme
      '&:hover': {
        background: theme.palette.type === 'light'
          ? 'linear-gradient(135deg, #a80d00 0%, #333 100%)' // Hover color in light mode
          : 'linear-gradient(135deg, #660000 0%, #111 100%)', // Hover color in dark mode
      },
      borderRadius: '12px', // Rounded corners
    },
    accordionDetails: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.palette.type === 'light'
        ? 'rgba(255, 0, 0, 0.2)' // Light transparent background in light mode
        : 'rgba(128, 0, 0, 0.2)', // Dark transparent background in dark mode
      flexDirection: 'column',
      borderRadius: '12px', // Rounded corners
      color: theme.palette.text.secondary, // Adjust text color
    },
    expanded: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.palette.type === 'light'
        ? 'rgba(255, 0, 0, 0.2)' // Light red transparent background when expanded in light mode
        : 'rgba(128, 0, 0, 0.2)', // Dark red transparent background when expanded in dark mode
    },
  }));
  
export const CustomAccordion = ({ title, children, expanded, onChange }) => {
  const classes = useStyles();

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      className={expanded ? classes.expanded : classes.accordionRoot}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

// export default CustomAccordion;
