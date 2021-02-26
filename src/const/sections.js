// Import local sections
import About from "Sections/About";
import Portfolio from "Sections/Portfolio";
import Education from "Sections/Education";
import Course from "Sections/Course";
import Experience from "Sections/Experience";
import Tech from "Sections/Tech";
import Legend from "Components/Legend";

import Face from "@material-ui/icons/Face";
import Work from "@material-ui/icons/Work";
import Build from "@material-ui/icons/Build";

// Import Font Awesome Icons components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGraduationCap,
   faChalkboard,
   faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const photo = "img/Foto.jpg";

const sections = {

    español: {
        about:{
            key:'about',
            title: 'Acerca de Mí',
            component: About,
            icon: Face,
            props: {
                photo,
            },
            section:{},
        },
        education:{
            key:'education',
            title: 'Estudios',
            component: Education,
            icon: ()=> <FontAwesomeIcon icon={faGraduationCap}/>,
            props: {},
            section:{
                subtitle:'Educación Formal',
                leftPart: Legend,
            },
        },
        experience:{
            key:'experience',
            title: 'Experiencia Laboral',
            component: Experience,
            icon: ()=> <FontAwesomeIcon icon={faBuilding}/>,
            props: {},
            section:{
                subtitle: 'Experiencia certificada',
                leftPart: Legend,
            },
        },
        course:{
            key:'course',
            title: 'Cursos',
            component: Course,
            icon: ()=> <FontAwesomeIcon icon={faChalkboard}/>,
            props: {},
            section:{
                subtitle: 'Cursos Virtuales',
                leftPart: Legend,
            },
        },
        tech:{
            key:'tech',
            title: 'Tecnologías',
            component: Tech,
            icon: Build,
            props: {},
            section:{
                subtitle: 'Tecnologías Usadas',
            },
        },
        portfolio:{
            key:'portfolio',
            title: 'Portafolio',
            component: Portfolio,
            icon: Work,
            props: {},
            section:{
                subtitle: 'Algunos Proyectos',
                fullWidth: true,
            },
        },        
    },
    english: {
        about:{
            key:'about',
            title: 'About Me',
            component: About,
            icon: Face,
            props: {
                photo,
            },
            section:{},
        },
        education:{
            key:'education',
            title: 'Education',
            component: Education,
            icon: ()=> <FontAwesomeIcon icon={faGraduationCap}/>,
            props: {},
            section:{
                subtitle:'Formal Education',
                leftPart: Legend,
            },
        },
        experience:{
            key:'experience',
            title: 'Experiencia',
            component: Experience,
            icon: ()=> <FontAwesomeIcon icon={faBuilding}/>,
            props: {},
            section:{
                subtitle: 'Certified Experience',
                leftPart: Legend,
            },
        },
        course:{
            key:'course',
            title: 'Courses',
            component: Course,
            icon: ()=> <FontAwesomeIcon icon={faChalkboard}/>,
            props: {},
            section:{
                subtitle: 'Online Courses',
                leftPart: Legend,
            },
        },
        tech:{
            key:'tech',
            title: 'Techs',
            component: Tech,
            icon: Build,
            props: {},
            section:{
                subtitle: 'Some Techs',
            },
        },
        portfolio:{
            key:'portfolio',
            title: 'Portfolio',
            component: Portfolio,
            icon: Work,
            props: {},
            section:{
                subtitle: 'Some Proyects',
                fullWidth: true,
            },
        },        
    },
};

const section_keys = object.keys(sections);

export {sections, section_keys};