import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Events from "../components/Events";
import Projects from "../components/Projects";
import Volunteer from "../components/Volunteer";
import Objectives from "../components/Objectives";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <Projects />
      <Stats />
      <Volunteer />
      <Events />
    </>
  );
};

export default Home;
