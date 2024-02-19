import wildquizz from "./assets/wildquizz.png";
import teamportal from "./assets/teamportal.png";
import packsmart from "./assets/packsmart.png";
import emmaus from "./assets/emmaus.png";
import serenity from "./assets/serenity.png";
import nothub from "./assets/nothub.png";
import PS1 from "./assets/PS1.png";
import PS2 from "./assets/PS2.png";
import PS3 from "./assets/PS3.png";
import PS4 from "./assets/PS4.png";
import PS5 from "./assets/PS5.png";
import E1 from "./assets/E1.png";
import E2 from "./assets/E2.png";
import E3 from "./assets/E3.png";
import NH1 from "./assets/NH1.png";
import NH2 from "./assets/NH2.png";
import NH3 from "./assets/NH3.png";
import NH4 from "./assets/NH4.png";
import NH5 from "./assets/NH5.png";
import NH6 from "./assets/NH6.png";
import N1 from "./assets/N1.png";
import N2 from "./assets/N2.png";
import N3 from "./assets/N3.png";
import N4 from "./assets/N4.png";
import N5 from "./assets/N5.png";
import S1 from "./assets/S1.png";
import S2 from "./assets/S2.png";
import S3 from "./assets/S3.png";
import S4 from "./assets/S4.png";
import S5 from "./assets/S5.png";
import S6 from "./assets/S6.png";
import S7 from "./assets/S7.png";
import S8 from "./assets/S8.png";
import S10 from "./assets/S10.png";
import S11 from "./assets/S11.png";
import S12 from "./assets/S12.png";
import S13 from "./assets/S13.png";
import TMDB from "./assets/TMDB.png";
import TMDB1 from "./assets/TMDB1.png";
import TMDB2 from "./assets/TMDB2.png";
import TMDB3 from "./assets/TMDB3.png";
import C1 from "./assets/C1.png";
import C2 from "./assets/C2.png";
import C3 from "./assets/C3.png";
import C4 from "./assets/C4.png";
import C5 from "./assets/C5.png";
import portfolio from "./assets/portfolio.png";
import vintageVibes from "./assets/vintageVibes.png";

const datas = [
  {
    id: 1,
    image: wildquizz,
    description:
      "First project carried done over 15 days during my training at the Wild Code School. Creation of a quiz on Lyon.",
    team: "4 developer",
    tech: "HTML, CSS, JavaScript and Leaflet",
    linkGit: "https://github.com/lilipix/P1-WildQuiz",
    linkWebsite:
      "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/",
  },
  {
    id: 2,
    image: teamportal,
    description:
      "Second project done in 1 month during my training at the Wild Code School. Creation of an intranet site. ",
    team: "4 developer",
    tech: "HTML, CSS, ReactJs, request of 3 APIs",
    linkGit: "https://github.com/lilipix/P2-TeamPortal",
    linkWebsite: "https://portal-corporation.netlify.app/",
  },
  {
    id: 3,
    image: packsmart,
    description:
      "Project done in one day for a hackathon on the theme of the holidays. Preparing your suitcase according to the weather at the vacation spot and the type of vacation.",
    team: "4 developer",
    tech: "HTML, CSS, ReactJs, json-server, request of 1 API",
    linkGit: "https://github.com/lilipix/PackSmart",
    seeMore: [PS1, PS2, PS3, PS4, PS5],
  },
  {
    id: 4,
    image: C1,
    description:
      "Development of some features of an e-commerce site, visualization and sorting of products.",
    tech: "HTML, CSS, ReactJs, request of 1 API ",
    seeMore: [C1, C2, C3, C4, C5],
  },
  {
    id: 5,
    image: TMDB,
    description:
      "Development of an application which displays the information of a series that has been typed in the search bar or by default the highest rated series of the moment, and series recommendations.",
    tech: "HTML, CSS, ReactJs, request of 1 API ",
    seeMore: [TMDB1, TMDB2, TMDB3],
  },
  {
    id: 6,
    image: serenity,
    description:
      "Project full stack done in 1 month during my training at the Wild Code School. Application with two interfaces subject to authentication to support patients before their hospitalization. See extract.",
    team: "4 developer",
    tech: "HTML, Tailwind CSS, ReactJs, NodeJs, ExpressJs, MySQL",
    linkGit: "https://github.com/lilipix/PackSmart",
    seeMore: [S10, S11, S12, S13, S1, S2, S3, S4, S5, S6, S7, S8],
  },
  {
    id: 7,
    image: emmaus,
    description:
      "Project full stack done in two days for a hackathon with Emmaus Connect. Application with two interfaces subject to authentication to evaluate the price of a phone and to track stocks. See extract.",
    team: "3 developer",
    tech: "HTML, CSS, ReactJs, NodeJs, ExpressJs, MySQL",
    linkGit: "https://github.com/lilipix/PackSmart",
    seeMore: [E1, E2, E3],
  },
  {
    id: 8,
    image: nothub,
    description:
      "Project full stack in 1 week. Creating a clone of Google Keep. Application with authentication to create notes, view them, modify them, delete them, assign them a category and sort them by categories. New features coming.",
    tech: "HTML, CSS, ReactJs, NodeJs, ExpressJs, MySQL",
    linkGit: "https://github.com/lilipix/PackSmart",
    seeMore: [N1, N2, N3, N4, N5, NH1, NH2, NH3, NH4, NH5, NH6],
  },
  { 
    id: 9,
    image: portfolio,
    description: "Developpment of my portfolio.",
    tech: "HTML, CSS, ReactJs",
    linkGit: "https://github.com/lilipix/Portfolio",
    },
    {
      id: 10,
      image: vintageVibes,
      description: "During my training I planned to create an audio player, but I didn't have enough time. I finally succeeded ! I had fun choosing the music and developing this audio player in a vintage style, which gave me the opportunity to improve my skills with Tailwind CSS. Watch and listen !",
      tech: "HTML, Tailwind CSS, ReactJs",
      linkGit: "https://github.com/lilipix/VintageVibes",
      linkWebsite: "https://vintagevibesaudio.netlify.app/",
    },
];

export default datas;
