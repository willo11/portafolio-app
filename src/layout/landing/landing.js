import React, { useRef, useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import local components
//import Section from "Components/Section";

// Import local const
//import { sections } from "const/sections";

// Import other modules
import { Scrollbars } from "react-custom-scrollbars";
//import ReactCountryFlag from "react-country-flag";

// Import local sections
// import Header from "Sections/Header";
// import Home from "Sections/Home";
import Footer from "Sections/Footer";
import About from "Sections/About";
import Tech from "Sections/Tech";
// import Project from "Sections/Project";

// import styles
import useStyles from "./styles";
import Porfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";
import Experience from "Sections/Experience";

const photo = "img/Foto.jpg";

export default function Landing(props) {
  const classes = useStyles();

  const themeProvider = useTheme();
  const smDown = useMediaQuery(themeProvider.breakpoints.down("sm"));

  const scrollbar = useRef();
  const [page, setPage] = useState("about");
  const [language, setLanguage] = useState("english");

  const [state, setState] = useState({
    subject: "",
    body: "",
  });

  //const keys = Object.keys(sections[language]);

  const offset = smDown ? -2 : 62;

  const handleState = (e) => {
    const { name, value } = e.target;
    setState((_state) => ({ ..._state, [name]: value }));
  };

  const scrollTo = (name) => () => {
    if (name)
      scrollbar.current.view.scroll({
        top: topPosition(name),
        behavior: "smooth",
      });
    else
      scrollbar.current.view.scroll({
        top: topPosition("footer"),
        behavior: "smooth",
      });
  };

  const handlePage = (_page) => {
    if (_page !== page) setPage(_page);
  };

  const topPosition = (name) => {
    return getByID(name).offsetTop - offset;
  };

  const getByID = (name) => {
    const _element = document.getElementById(name);
    if (_element) return _element;
    else return false;
  };

  return (
    <>
      <div>
        {/* <Scrollbars
          className="custom-scrollbars"
          ref={scrollbar}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        > */}
        <About
          id="about"
          language={language}
          theme="dark"
          photo={photo}
          toPage={scrollTo}
          state={state}
        />
        <Course id="course" language={language} theme="light" />
        <Experience language={language} theme="light" toPage={scrollTo} />
        <Education language={language} theme="light" toPage={scrollTo} />
        <Tech id="tech" language={language} theme="dark" toPage={scrollTo} />
        <Porfolio
          id="portfolio"
          language={language}
          theme="light"
          toPage={scrollTo}
        />
        <Footer
          id="footer"
          language={language}
          hidden={page !== "about"}
          theme="dark"
          toPage={scrollTo}
          state={state}
          handleState={handleState}
        />
        {/* </Scrollbars> */}
      </div>
    </>
  );
}
