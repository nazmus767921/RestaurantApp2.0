import { Box, Grid, Text } from "@chakra-ui/react";
import Button from "@components/Button/Button";
import IconText from "@components/IconText/IconText";
import SocialIcons from "@components/SocialIcons";
import { utilizeModuleClasses } from "easy-css-modules";
import { CgMouse } from "react-icons/cg";
import styles from "../styles/hero.module.scss";

const $_ = utilizeModuleClasses(styles);

const Hero = () => {
  return (
    <Box as="section" w={"100%"} className={$_("hero @container")}>
      <Title />
      <Text fontSize={"unset"} color={"var(--accent)"} opacity={0.9}>
        Bringing heat to your meat. No one can compete with our meat
      </Text>
      <Button>reserve a table</Button>
      <BottomArea w={"100%"} className={$_("@container")} />
    </Box>
  );
};

const Title = () => {
  return (
    <Text
      as={"h1"}
      fontSize={"7.28rem"}
      textAlign={"center"}
      className={$_("hero__title")}
    >
      Taste The <br />
      <Box as="span" className={$_("hero__title hero__title--span @isBrand")}>
        Difference
      </Box>
    </Text>
  );
};

const BottomArea = ({ ...rest }) => {
  return (
    <Grid
      templateColumns={"1fr 1fr 1fr"}
      position={"absolute"}
      bottom={"2rem"}
      placeItems={"center"}
      {...rest}
      className={$_("hero__bottomArea @container")}
    >
      <Box /> {/* important for layout */}
      <IconText icon={<CgMouse />}>Scroll Down</IconText>
      <SocialIcons />
    </Grid>
  );
};

export default Hero;
