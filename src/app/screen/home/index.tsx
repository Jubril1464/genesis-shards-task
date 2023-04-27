import utility from "../../../utils/utility";
import { AppText, FlexColumn, ScreenContainer,CenterPopup, AppLink } from "../../app-styles";
import Nav from "../../../components/nav";
import Hero from "../hero";
import Work from "../how-we-work";
import Powered from "../powered";
import Project from "../projects";
import Performance from "../performance";
import World from "../world";


const Home = () => {
  return (
    <>
    <Nav />
     <Hero />
     <Work />
     <Powered />
     <Project />
     <Performance />
     <World />
    </>
  );
};

export default utility.routeData("/", <Home />, "Home");
