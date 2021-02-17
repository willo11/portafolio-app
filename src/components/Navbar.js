import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton, Button } from "@material-ui/core";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { NavLink, BrowserRouter as Router, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    color: "grey",
    "&.active": {
      color: `${theme.palette.white} !important`,
    },
  },
  active: {
    color: "white !important",
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const route = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            <NavLink className={`nav-item nav-link ${classes.title}`} exact to="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <LaptopChromebookIcon />
              </IconButton>
              Portafolio
            </NavLink>
          </Typography>
          <div className={classes.grow}></div>
          <NavLink
            className={`nav-item nav-link ${route.pathname === "/about" ? classes.active : classes.title}`}
            exact
            to="/about"
          >
            <Typography variant="h6" color="inherit">
              About me
            </Typography>
          </NavLink>
          <NavLink className={`nav-item nav-link ${classes.title}`} exact to="/project">
            <Typography variant="h6">
              Projects
            </Typography>
          </NavLink>

          <NavLink className={`nav-item nav-link ${classes.title}`} exact to="/education">
            <Typography variant="h6">
              Education
            </Typography>
          </NavLink>

          <NavLink className={`nav-item nav-link ${classes.title}`} exact to="/contact">
            <Typography variant="h6">
              Contact
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};
