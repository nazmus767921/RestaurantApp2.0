import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Button from "@components/Button/ButtonOutlined";
import { utilizeModuleClasses } from "easy-css-modules";
import { RiMapPinLine } from "react-icons/ri";
import styles from "../styles/about.module.scss";

const $_ = utilizeModuleClasses(styles);

const About = () => {
  return (
    <Flex
      as={"section"}
      className={$_("about @container")}
      gap={"var(--spacing-6)"}
    >
      <RestaurantImages />
      <Flex
        direction={"column"}
        gap={"var(--spacing-3)"}
        flexGrow={1}
        basis={"50%"}
      >
        <Text as={"h3"}>
          The{" "}
          <Box as="span" color={"var(--brand)"}>
            premium
          </Box>{" "}
          taste that yearns to be savored, ground beef between your teeth
        </Text>
        <Text>
          Res2Rant sets itself apart by prioritizing the social experience and
          taking a vibe-driven approach to fine dining. Our chic ambiance and
          decor in the dining room, sushi lounge, and cocktail bar create a fun
          and stylish atmosphere.
        </Text>
        <Button
          icon={<RiMapPinLine />}
          color="var(--brand)"
          marginBlock={"var(--spacing-1)"}
        >
          Our Address
        </Button>
      </Flex>
    </Flex>
  );
};

const RestaurantImages = () => {
  return (
    <Grid className={$_("about__restaurantImages")}>
      <Box
        className={$_("topImage @img__wrapper")}
        w={"30rem"}
        height={"30rem"}
        borderRadius={"1.56rem"}
      >
        <Image src="/images/restaurant2.png" />
      </Box>
      <Box
        className={$_("bottomImage @img__wrapper")}
        w={"19rem"}
        height={"32rem"}
        borderRadius={"1.56rem"}
      >
        <Image src="/images/restaurant1.png" />
      </Box>
    </Grid>
  );
};

export default About;
