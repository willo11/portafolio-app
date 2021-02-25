import React, { useState } from "react";

// Import Material UI components
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

// Import local const
import studies from "const/studies";

// import styles
import useStyles from "./styles";

const Education = ({theme, language , ...other}) => {

   const classes = useStyles({theme});

   const [tooltip, setTooltip] = useState(false);

   const handleTooltip = (newState = false) => () => {
      if (newState !== tooltip) setTooltip(newState);
   };

   return (
      <>
         <Timeline
            classes={{root: classes.root}}
         >
            {studies[language].map((study,index)=>(
               <TimelineItem
                  key={study.title}
                  classes={{missingOppositeContent: classes.missingOppositeContent,}}
               >
                  <TimelineSeparator>
                     <TimelineDot 
                        color={study.ended ? 'secondary' : 'grey'}
                        className={classes.dot}
                     />
                     {index === studies[language].length -1 ? null : (<TimelineConnector />)}
                  </TimelineSeparator>
                  <TimelineContent
                     onMouseOver={handleTooltip(index)}
                     onMouseOut={handleTooltip(false)}
                  >
                     <Typography
                        className={classes.title}
                        align='justify'
                        color='inherit'
                        variant='subtitle2'
                     >
                        {study.title}
                     </Typography>
                     <Typography
                        align='justify'
                        color='inherit'
                        paragraph
                        variant='subtitle2'
                     >
                        {study.institution}
                        {study.date ? ` | ${study.date}` : null }
                     </Typography>

                        {study.description.map((description, key)=>(
                           <Typography
                           key = {key}
                           align='justify'
                           color='inherit'
                           paragraph
                           variant='body1'
                        >
                           {study.description}
                        </Typography>
                        ))}
                  </TimelineContent>
               </TimelineItem>
            ))}
         </Timeline>
      </>
   );
};

export default Education;
