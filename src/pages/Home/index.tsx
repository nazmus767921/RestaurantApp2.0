import { Box } from "@chakra-ui/react";
import Banner from "@components/Banner/Banner";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import ReservationCTA from "@components/ReservationCTA/ReservationCTA";
import { utilizeModuleClasses } from "easy-css-modules";
import About from "./components/About";
import FeaturedMenu from "./components/FeaturedMenu";
import Hero from "./components/Hero";
import styles from "./styles/index.module.scss";

const $_ = utilizeModuleClasses(styles);

const Home = () => {
  return (
    <Box as="main" className={$_("homepage")}>
      <Nav className={$_("homepage__navbar")} slot={<Banner />} />
      <Hero />
      <FeaturedMenu />
      <About />
      <ReservationCTA />
      <Footer />
    </Box>
  );
};

export default Home;
