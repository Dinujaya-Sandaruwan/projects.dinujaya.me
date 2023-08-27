import { IconType } from "react-icons";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";

import {
  SiTypescript,
  SiPug,
  SiRuby,
  SiCsharp,
  SiNodedotjs,
  SiElectron,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiEmberdotjs,
  SiExpress,
  SiDjango,
  SiVisualstudio,
  SiFlask,
  SiSpringboot,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiLess,
  SiJquery,
  SiRedux,
  SiWebflow,
  SiWebassembly,
  SiPwa,
  SiAmp,
  SiWebrtc,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiSubversion,
  SiGulp,
  SiGrunt,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiJest,
  SiChai,
  SiMocha,
  SiSelenium,
  SiCypress,
  SiJenkins,
  SiTravisci,
  SiCircleci,
  SiHeroku,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDigitalocean,
  SiNginx,
  SiApache,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiGraphql,
  SiApollographql,
  SiPrisma,
  SiHasura,
  SiWordpress,
  SiDrupal,
  SiJoomla,
  SiShopify,
  SiMagento,
  SiWoocommerce,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoPhp,
  BiLogoPython,
  BiLogoAws,
} from "react-icons/bi";

const iconList = (technologies: string[]) => {
  const icons: IconType[] = [];
  technologies.forEach((technology) => {
    switch (technology) {
      case "HTML":
        icons.push(AiFillHtml5);
        break;
      case "Pug":
        icons.push(SiPug);
        break;
      case "CSS":
        icons.push(BiLogoCss3);
        break;
      case "JavaScript":
        icons.push(BiLogoJavascript);
        break;
      case "TypeScript":
        icons.push(SiTypescript);
        break;
      case "PHP":
        icons.push(BiLogoPhp);
        break;
      case "AJAX":
        icons.push(VscJson);
        break;
      case "Ruby":
        icons.push(SiRuby);
        break;
      case "Python":
        icons.push(BiLogoPython);
        break;
      case "Java":
        icons.push(FaJava);
        break;
      case "C#":
        icons.push(SiCsharp);
        break;
      case "Node.js":
        icons.push(SiNodedotjs);
        break;
      case "React":
        icons.push(SiReact);
        break;
      case "Electron.js":
        icons.push(SiElectron);
        break;
      case "Angular":
        icons.push(SiAngular);
        break;
      case "Vue.js":
        icons.push(SiVuedotjs);
        break;
      case "Ember.js":
        icons.push(SiEmberdotjs);
        break;
      case "Express.js":
        icons.push(SiExpress);
        break;
      case "Django":
        icons.push(SiDjango);
        break;
      case "Ruby_on_Rails":
        icons.push(SiRuby);
        break;
      case "ASP.NET":
        icons.push(SiVisualstudio);
        break;
      case "Flask":
        icons.push(SiFlask);
        break;
      case "Spring_Framework":
        icons.push(SiSpringboot);
        break;
      case "Laravel":
        icons.push(SiLaravel);
        break;
      case "Bootstrap":
        icons.push(SiBootstrap);
        break;
      case "Materialize_CSS":
        icons.push(DiMaterializecss);
        break;
      case "Tailwind_CSS":
        icons.push(SiTailwindcss);
        break;
      case "Scss":
        icons.push(SiSass);
        break;
      case "Sass":
        icons.push(SiSass);
        break;
      case "Less":
        icons.push(SiLess);
        break;
      case "jQuery":
        icons.push(SiJquery);
        break;
      case "Redux":
        icons.push(SiRedux);
        break;
      case "RESTful_APIs":
        icons.push(AiFillApi);
        break;
      case "WebSockets":
        icons.push(SiWebflow);
        break;
      case "WebAssembly":
        icons.push(SiWebassembly);
        break;
      case "PWA_(Progressive_Web_Apps)":
        icons.push(SiPwa);
        break;
      case "AMP_(Accelerated_Mobile_Pages)":
        icons.push(SiAmp);
        break;
      case "WebRTC":
        icons.push(SiWebrtc);
        break;
      case "Firebase":
        icons.push(SiFirebase);
        break;
      case "Docker":
        icons.push(SiDocker);
        break;
      case "Kubernetes":
        icons.push(SiKubernetes);
        break;
      case "Git":
        icons.push(SiGit);
        break;
      case "SVN_(Subversion)":
        icons.push(SiSubversion);
        break;
      case "Gulp":
        icons.push(SiGulp);
        break;
      case "Grunt":
        icons.push(SiGrunt);
        break;
      case "Webpack":
        icons.push(SiWebpack);
        break;
      case "Babel":
        icons.push(SiBabel);
        break;
      case "ESLint":
        icons.push(SiEslint);
        break;
      case "Prettier":
        icons.push(SiPrettier);
        break;
      case "Jest":
        icons.push(SiJest);
        break;
      case "Mocha":
        icons.push(SiMocha);
        break;
      case "Chai":
        icons.push(SiChai);
        break;
      case "Selenium":
        icons.push(SiSelenium);
        break;
      case "Cypress":
        icons.push(SiCypress);
        break;
      case "Jenkins":
        icons.push(SiJenkins);
        break;
      case "Travis_CI":
        icons.push(SiTravisci);
        break;
      case "CircleCI":
        icons.push(SiCircleci);
        break;
      case "Heroku":
        icons.push(SiHeroku);
        break;
      case "AWS_(Amazon_Web_Services)":
        icons.push(BiLogoAws);
        break;
      case "Azure":
        icons.push(SiMicrosoftazure);
        break;
      case "Google_Cloud_Platform":
        icons.push(SiGooglecloud);
        break;
      case "DigitalOcean":
        icons.push(SiDigitalocean);
        break;
      case "Nginx":
        icons.push(SiNginx);
        break;
      case "Apache":
        icons.push(SiApache);
        break;
      case "MySQL":
        icons.push(SiMysql);
        break;
      case "PostgreSQL":
        icons.push(SiPostgresql);
        break;
      case "MongoDB":
        icons.push(SiMongodb);
        break;
      case "Redis":
        icons.push(SiRedis);
        break;
      case "SQLite":
        icons.push(SiSqlite);
        break;
      case "GraphQL":
        icons.push(SiGraphql);
        break;
      case "Apollo_Server":
        icons.push(SiApollographql);
        break;
      case "Prisma":
        icons.push(SiPrisma);
        break;
      case "Hasura":
        icons.push(SiHasura);
        break;
      case "WordPress":
        icons.push(SiWordpress);
        break;
      case "Drupal":
        icons.push(SiDrupal);
        break;
      case "Joomla":
        icons.push(SiJoomla);
        break;
      case "Shopify":
        icons.push(SiShopify);
        break;
      case "Magento":
        icons.push(SiMagento);
        break;
      case "WooCommerce":
        icons.push(SiWoocommerce);
        break;

      default:
        break;
    }
  });

  return icons;
};

export default iconList;
