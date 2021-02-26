import React from "react";

// Import Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Waypoint } from "react-waypoint";

// import styles
import useStyles from "./styles";

const Section = ({
   id,
   title,
   page,
   leftPart,
   subtitle,
   theme,
   children,
   fullWidth,
   handlePage,
   before,
   after,
   ...other
}) => {
   const classes = useStyles({ theme });

   const onLeave = ({ currentPosition, previousPosition }) => {
      if (currentPosition === "above" && previousPosition === "inside" && after)
         handlePage(after);
   };

   const onEnter = ({ currentPosition, previousPosition }) => {
      if (currentPosition === "inside" && previousPosition === "above" && after)
         handlePage(id);
   };

   return (
      <Waypoint topOffset={64} onLeave={onLeave} onEnter={onEnter}>
         <div id={id} {...other}>
            <div className={classes.root}>
               {fullWidth ? (
                  <>
                     <div className={classes.paddingsFull}>
                        <Container>
                           <Grid container spacing={3} justify="flex-start">
                              <Grid item lg={3} md={3} sm={4} xs={12}>
                                 <div className={classes.header}>
                                    <Typography
                                       className={classes.title}
                                       color="inherit"
                                       variant="h2"
                                    >
                                       {title}
                                    </Typography>
                                    <Typography
                                       className={classes.subtitle}
                                       color="inherit"
                                       variant="subtitle1"
                                    >
                                       {subtitle}
                                    </Typography>
                                 </div>
                              </Grid>
                           </Grid>
                        </Container>
                     </div>
                     {children}
                  </>
               ) : (
                  <div className={classes.paddings}>
                     <Container>
                        <Grid container spacing={3} justify="center">
                           <Grid item lg={3} md={3} sm={4} xs={12}>
                              <div className={classes.header}>
                                 <Typography
                                    className={classes.title}
                                    color="inherit"
                                    variant="h2"
                                 >
                                    {title}
                                 </Typography>
                                 <Typography
                                    className={classes.subtitle}
                                    color="inherit"
                                    variant="subtitle1"
                                 >
                                    {subtitle}
                                 </Typography>
                              </div>
                              {leftPart}
                           </Grid>
                           <Grid item lg={9} md={9} sm={8} xs={12}>
                              <div className={classes.content}>{children}</div>
                           </Grid>
                        </Grid>
                     </Container>
                  </div>
               )}
            </div>
         </div>
      </Waypoint>
   );
};

export default Section;
