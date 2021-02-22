import confusionBootstrap from "const/confusionBootstrap";
import confusionReact from "const/confusionReact";
import confusionReactNative from "const/confusionReactNative";
import youTrain from "const/youTrain";

const images = {
  espanol: [
    {
      key: "confusionBootstrap",
      img: confusionBootstrap[0].url,
      tittle: "Confusion Bootstrap",
      date: "Aug 1, 2020 - Sep 10, 2020",
      location: "Bucaramanga, Santander",
      role: "Aprendiz Front-End",
      entity: "Coursera",
      description: [
        "Este curso le dará una visión general de client-side web UI frameworks, en particular Bootstrap 4. Aprenderás sobre grids y diseño responsivo, componentes JavaScript y CSS de Bootstrap. Aprenderá sobre los preprocesadores CSS, Less y Sass. También aprenderá los fundamentos de Node.js y NPM y corredores de tareas como Grunt y Gulp.",
      ],
      tech: [
        "Bootstrap (Front-End Framework)",
        "Node.Js",
        "Jquery",
        "SASS (Stylesheet Language)",
      ],
      media: confusionBootstrap,
    },
    {
      key: "confusionReactNative",
      img: confusionReactNative[0].url,
      tittle: "Confusion ReactNative",
      date: "Sep 10, 2020 - Oct 10, 2020",
      location: "Bucaramanga, Santander",
      role: "Aprendiz Front-End",
      entity: "Coursera",
      description: [
        "Este curso se centra en el desarrollo de aplicaciones nativas y verdaderamente multiplataforma para iOS y Android utilizando React Native (Ver 0.55) y el SDK de Expo (Ver. 27.0.0). React Native utiliza JavaScript moderno para obtener una UI y un rendimiento verdaderamente nativos, al tiempo que comparte habilidades y código con la web. Aprenderás sobre el desarrollo de UI con el soporte de React Native UI y layout y accederás a las capacidades de la plataforma móvil nativa desde Javascript usando el Expo SDK.",
      ],
      tech: ["React-Redux", "Expo SDK", "React-Native", "Javascript skills"],
      media: confusionReactNative,
    },
    {
      key: "youTrain",
      img: youTrain[0].url,
      tittle: "You Train",
      date: "mar 10, 2020 - Nov 1, 2020",
      location: "Bucaramanga, Santander",
      role: "Desarrollador FullStack",
      entity: "UIS",
      description: [
        "El objetivo de este proyecto era desarrollar una aplicacion movil para el acondicionamiento fisico mediante la creacion de un plan de entrenamiento personalizado. ",
        "Fue desarrollado utilizando la libreria React-Native, y utilizando la base de datos mongodb-atlas (DBaaS)",
      ],
      tech: ["React-Native", "Git", "NodeJs", "MongoDB-Atlas"],
      media: youTrain,
    },
    {
      key: "confusionReact",
      img: confusionReact[0].url,
      tittle: "Confusion React",
      date: "Ene 4, 2021 - Ene 20, 2021",
      location: "Bucaramanga, Santander",
      role: "Aprendiz Front-End",
      entity: "Coursera",
      description: [
          "Este curso explora el desarrollo de aplicaciones front-end basadas en Javascript, y en particular la librería React (Actualmente Ver. 16.3). Este curso utilizará JavaScript ES6 para el desarrollo de aplicaciones React. También obtendrá una introducción al uso de Reactstrap para el diseño de UI responsivo basado en Bootstrap 4. Se le presentará varios aspectos de los componentes de React. Aprenderá sobre el enrutador React y su uso en el desarrollo de aplicaciones de una sola página. También aprenderá a diseñar formularios controlados. ",
      ],
      tech: ["React", "ReactStrap", "Redux", "NodeJs"],
      media: confusionReact,
    },
  ],
  english: [
    {
      key: "confusionBootstrap",
      img: confusionBootstrap[0].url,
      tittle: "Confusion Bootstrap",
      date: "Ago 1, 2020 - Sep 10, 2020",
      location: "Bucaramanga, Santander",
      role: "Front-End Trainee",
      entity: "Coursera",
      description: [
        "This course will give you an overview of client-side web UI frameworks, in particular Bootstrap 4. You will learn about grids and responsive design, Bootstrap CSS and JavaScript components. You will learn about CSS preprocessors, Less and Sass. You will also learn the basics of Node.js and NPM and task runners like Grunt and Gulp.",
      ],
      tech: [
        "Bootstrap (Front-End Framework)",
        "Node.Js",
        "Jquery",
        "SASS (Stylesheet Language)",
      ],
      media: confusionBootstrap,
    },
    {
      key: "confusionReactNative",
      img: confusionReactNative[0].url,
      tittle: "Confusion ReactNative",
      date: "Sep 10, 2020 - Oct 10, 2020",
      location: "Bucaramanga, Santander",
      role: "Front-End Trainee",
      entity: "Coursera",
      description: [
        "This course focuses on developing truly cross-platform, native iOS and Android apps using React Native (Ver 0.55) and the Expo SDK (Ver. 27.0.0). React Native uses modern JavaScript to get truly native UI and performance while sharing skills and code with the web. You will learn about UI development with React Native UI and layout support and access the native mobile platform's capabilities from Javascript using the Expo SDK.",
      ],
      tech: ["React-Redux", "Expo SDK", "React-Native", "Javascript skills"],
      media: confusionReactNative,
    },
    {
      key: "youTrain",
      img: youTrain[0].url,
      tittle: "You Train",
      date: "mar 10, 2020 - Nov 1, 2020",
      location: "Bucaramanga, Santander",
      role: "FullStack Developer",
      entity: "UIS",
      description: [
          "The objective of this project was to develop a mobile application for fitness by creating a personalized training plan. ",
          "It was developed using the React-Native library, and using the mongodb-atlas (DBaaS) database.",
       ],
      tech: ["React-Native", "Git", "NodeJs", "MongoDB-Atlas"],
      media: youTrain,
    },
    {
      key: "confusionReact",
      img: confusionReact[0].url,
      tittle: "Confusion React",
      date: "Jan 4, 2021 - Jan 20, 2021",
      location: "Bucaramanga, Santander",
      role: "Front-End Trainee",
      entity: "Coursera",
      description: [
          "This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms.",
      ],
      tech: ["React", "ReactStrap", "Redux", "NodeJs"],
      media: confusionReact,
    },
  ],
};

export default images;
