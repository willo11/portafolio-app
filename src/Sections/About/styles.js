import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
         padding: theme.spacing(0),
      },
   },
}));

export default useStyles;
