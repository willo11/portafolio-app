import { createMuiTheme } from "@material-ui/core/styles";

import palette from "./palette";
import typography from "./typography";

export default createMuiTheme({
  palette,
  typography,
  spacing: 4,
  shape: {
    borderRadius: 5,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
