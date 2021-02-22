import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   group: {
      position: "relative",
      cursor: "pointer",
      "&:hover div.background": {
         display: "flex !important",
      },
      "&:focus div.background": {
         display: "flex !important",
      },
      "&:active div.background": {
         display: "flex !important",
      },
   },
   backgroundDark: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "none",
   },
   icon: {
      position: "absolute",
      top: 10,
      right: 10,
      color: theme.palette.white,
      width: 16,
      height: 16,
   },
   setMedia: {
      position: "absolute",
      borderRadius: "50%",
      zIndex: 1,
      bottom: "calc(50% - 13px)",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
   },
   setMediaIcon: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      cursor: "pointer",
      padding: theme.spacing(0, 1),
   },
   media: {
      paddingTop: "56.25%",
      height: 0,
      width: "100%",
   },
   fatherPreview: {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
   },
   viewPreview: {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "calc( 100vh - 69px )",
   },
   rootDialog: {
      lineHeight: 0,
   },
   paperScrollBody: {
      overflowY: "hidden",
   },
   stepperRoot: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
      padding: 8,
   },
   dots: {
      display: "flex",
      flexDirection: "row",
   },
   dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: "50%",
      width: 8,
      height: 8,
      margin: "0 2px",
      cursor: "pointer",
   },
   dotActive: {
      backgroundColor: theme.palette.secondary.main,
   },
   positionBottom: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper,
   },
}));

export default useStyles;
