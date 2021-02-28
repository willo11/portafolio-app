import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from "@material-ui/icons/Translate";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
// import styles
import useStyles from "./styles";

export default function Header({
  page,
  language,
  lang,
  setLanguage,
  isMobile,
  sections,
  onChangePage,
  ...other
}) {
  const classes = useStyles({ home: page === "about" });

  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const scrollTo = (key) => () => {
    onChangePage(key)();
    setOpen(false);
  };

  const handleOpen = (newState) => () => {
    if (newState !== open) setOpen((_open) => (newState ? newState : !_open));
  };

  const handleMenuLanguage = (newState) => () => {
    if (newState !== menu) setMenu((_open) => (newState ? newState : !_open));
  };

  const handleMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const menuClose = () => {
    setMenu(null);
  };

  const handleLanguage = (language) => () => {
    setLanguage(language);
    menuClose();
  };

  useMemo(() => {
    if (page !== null && open) setOpen(false);
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      {isMobile ? (
        <>
          <div role="presentation" className={classes.buttonBar}>
            <Zoom in={page !== null}>
              <Fab
                onClick={handleOpen()}
                color="secondary"
                siza="small"
                aria-label="Back to Top"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </Fab>
            </Zoom>
            {Object.values(sections).map(
              ({ icon: Icon, key, title }, index) => (
                <Zoom
                  key={key}
                  in={open}
                  timeout={250 + 50 * (index + 1)}
                  className="mt-3"
                >
                  <Tooltip
                    open={open}
                    TransitionProps={{
                      style: {
                        transitionDelay: `${100 + 50 * (index + 1)}ms`,
                      },
                    }}
                    title={title}
                    placement="left"
                  >
                    <Fab
                      onClick={scrollTo(key)}
                      color={page === key ? "secondary" : "default"}
                      size="small"
                      aria-label="back to top"
                    >
                      <Icon />
                    </Fab>
                  </Tooltip>
                </Zoom>
              )
            )}
          </div>
          <div role="presentation" className={classes.buttonLanguage}>
            {Object.values(lang).map(({ key, title, icon }, index) => (
              <Zoom
                key={key}
                in={menu}
                timeout={
                  250 + 50 * (Object.keys(lang).length - 1) * (index + 1)
                }
                className="mb-3"
              >
                <Tooltip
                  open={menu}
                  TransitionProps={{
                    style: { transitionDelay: `${100 + 50 * (index + 1)}ms` },
                  }}
                  title={title}
                  placement="right"
                >
                  <Fab
                    onClick={handleLanguage(key)}
                    color={key === language ? "secondary" : "default"}
                    size="small"
                  >
                    {icon}
                  </Fab>
                </Tooltip>
              </Zoom>
            ))}
            <Zoom in={page !== null}>
              <Fab
                onClick={handleMenuLanguage()}
                color="secondary"
                size="small"
                aria-label="Back to top"
              >
                {menu ? <CloseIcon /> : <TranslateIcon />}
              </Fab>
            </Zoom>
          </div>
        </>
      ) : (
        <div style={{ height: 64 }}>
          <Paper className={classes.appBar} variant="outlined" square>
            <Toolbar>
              <Button color="inherit" onClick={handleMenu}>
                {lang[language].title}
              </Button>
              <Menu
                anchorEl={menu}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(menu)}
                onClose={menuClose}
              >
                {Object.values(lang).map(({ key, title, icon }) => (
                  <MenuItem key={key} onClick={handleLanguage(key)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <Typography variant="inherit">{title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <div className={classes.floatRight} />
              {Object.values(sections).map(({ key: section_name, title }) => (
                <Button
                  key={section_name}
                  color="inherit"
                  className={clsx("ml-3", {
                    [classes.activeButton]: page === section_name,
                  })}
                  onClick={onChangePage(section_name)}
                >
                  {title}
                </Button>
              ))}
            </Toolbar>
          </Paper>
        </div>
      )}
    </>
  );
}
