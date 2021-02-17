import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "red",
  },
  willo: {
    padding: theme.spacing(20),
  },
}));

function AboutScreen() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="">AboutScreen</h1>
      <Button
        classes={{ label: classes.button, outlined: classes.willo }}
        variant="outlined"
      >
        sjdcnsdjkcn
      </Button>
    </div>
  );
}

export default AboutScreen;
