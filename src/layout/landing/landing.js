import React, { useRef, useState } from "react";

// Import Material UI components
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import local components
import Section from "Components/Section";

// Import local const
import { sections } from "const/sections";

// Import other modules
import { Scrollbars } from "react-custom-scrollbars";
import ReactCountryFlag from "react-country-flag";

// Import local sections
import Header from "Sections/Header";
import Footer from "Sections/Footer";
import Project from "Sections/Project";

// import styles
import useStyles from "./styles";

const lang = {
  espanol: {
    title: "Español",
    key: "espanol",
    icon:<ReactCountryFlag countryCode="ES" svg />,
  },
  english: {
    title: "English",
    key: "english",
    icon:<ReactCountryFlag countryCode="US" svg/>,
  },
};

export default function Landing(props) {
  const classes = useStyles();

  const themeProvider = useTheme();
  const smDown = useMediaQuery(themeProvider.breakpoints.down("sm"));

  const scrollbar = useRef();
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState("english");

  const [state, setState] = useState({
    subject: "",
    body: "",
  });

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
      <div className={classes.root}>
        <Scrollbars
          className="custom-scrollbars"
          ref={scrollbar}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <Header
            language={language}
            lang={lang}
            setLanguage={setLanguage}
            onChangePage={scrollTo}
            page={page}
            sections={sections[language]}
            isMobile={smDown}
          />

          {Object.values(sections[language]).map(
            (
              {
                component: Component,
                key,
                title,
                props,
                section: { leftPart: LeftPart = null, ...propsSection } = {},
              },
              section_index,
              array
            ) => {
              return (
                <Section
                  {...propsSection}
                  id={key}
                  page={page}
                  key={key}
                  handlePage={handlePage}
                  before={
                    array[section_index - 1]
                      ? array[section_index - 1].key
                      : null
                  }
                  after={
                    array[section_index + 1]
                      ? array[section_index + 1].key
                      : null
                  }
                  title={title}
                  leftPart={
                    LeftPart ? (
                      <LeftPart
                        language={language}
                        theme={section_index % 2 === 0 ? "dark" : "light"}
                      />
                    ) : null
                  }
                  theme={section_index % 2 === 0 ? "dark" : "light"}
                >
                  <Component
                    {...props}
                    language={language}
                    state={state}
                    page={page}
                    toPage={scrollTo}
                    theme={section_index % 2 === 0 ? "light" : "dark"}
                  />
                </Section>
              );
            }
          )}

          <Project id="project" page={page} language={language} />

          <Footer
            id="footer"
            language={language}
            hidden={page !== "home"}
            theme="light"
            toPage={scrollTo}
            state={state}
            handleState={handleState}
          />
        </Scrollbars>
      </div>
    </>
  );
}
