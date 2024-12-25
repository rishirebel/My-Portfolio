import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Resume from "../../settings/resume.json";
import { useHistory } from "react-router-dom"; // Use useHistory for React Router v5

const useStyles = makeStyles((theme) => ({
    speedDial: {
      position: "absolute",
      top: theme.spacing(12),
      left: theme.spacing(6),
    },
    iconColor: {
      color: theme.palette.foreground.default,
    },
}));

export const NavDial = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory(); // Initialize history

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const actionIcons = Resume.basics.nav.map((action) => (
      <SpeedDialAction
        key={action.network.toLowerCase()}
        icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
        tooltipTitle={action.network}
        onClick={() => {
          handleClose();
          history.push(action.url); // Use history.push for navigation
        }}
        underline="none"
        color="inherit"
      />
    ));

    return (
      <>
        <SpeedDial
          ariaLabel="SpeedDial"
          className={classes.speedDial}
          hidden={false}
          icon={
            <SpeedDialIcon 
              icon={<MenuIcon />}               // Burger icon when closed
              openIcon={<CloseIcon />}          // Close icon when open
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="down"
        >
          {actionIcons}
        </SpeedDial>
      </>
    );
};
