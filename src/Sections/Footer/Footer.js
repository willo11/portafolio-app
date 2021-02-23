import React from "react";

// Import Material UI components
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// Import local components
import Social from "Components/Social";

// Import local const
import text from "const/footer";

// import styles
import useStyles from "./styles";

const Footer = (
  { hidden, language, toPage, theme, state, handleState, ...other },
  ref
) => {
  const classes = useStyles({ theme });
  return (
    <div {...other} className={classes.root}>
      <div className={classes.paddings}>
        <Container >
          <Grid container direction="row-reverse" spacing={3} justify="center">
            <Grid item lg={6} md={7} sm={12}>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].title}
                </Typography>
                <TextField
                  color="secondary"
                  fullWidth
                  id="subject"
                  label={text[language].inputs[0]}
                  variant="outlined"
                  className="mt-2"
                  size="small"
                  name="subject"
                  defaultValue={state.subject}
                  onBlur={handleState}
                />
                <TextField
                  color="secondary"
                  fullWidth
                  label={text[language].inputs[1]}
                  variant="outlined"
                  multiline
                  rows={7}
                  className="mt-3"
                  size="small"
                  name="body"
                  defaultValue={state.body}
                  onBlur={handleState}
                />
                <Button
                  variant="contained"
                  className="mt-3"
                  color="secondary"
                  target="_blank"
                  href={`mailto:willopalomino@gmail.com?Subject=Github%20page:%20${state.subject}&body=${state.body}`}
                  rel="noreferrer"
                >
                  {text[language].inputs[2]}
                </Button>
              </div>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].social}
                </Typography>
                <Social className={classes.social} mailAction={toPage()} />
              </div>
              <div className={classes.header}>
                <Typography
                  className={classes.title}
                  color="inherit"
                  variant="h2"
                >
                  {text[language].contact}
                </Typography>
                <Typography
                  color="inherit"
                  variant="body1"
                  align="left"
                  paragraph
                >
                  <Link
                    href={`mailto:willopalomino@gmail.com?Subject=Github%20page:%20${state.subject}&body=${state.body}`}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                  >
                    willopalomino@gmail.com
                  </Link>
                </Typography>
                <Typography color="inherit" variant="body1" align="left">
                  <Link href="tel:3222240683" color="inherit">
                    (+57) 3222240683
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.bottom}>
        <Typography variant="caption" color="inherit" align="center">
          William Giovany Palomino - {text[language].tech}
        </Typography>
      </div>
      <Zoom in={hidden}>
        <Tooltip title="Scroll back to top" placement="left">
          <div role="presentation" className={classes.buttonScroll}>
            <Fab
              onClick={toPage("about")}
              color="secondary"
              size="small"
              aria-label="scroll back to top"
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </div>
        </Tooltip>
      </Zoom>
    </div>
  );
};

export default Footer;
