import { Button, ButtonProps, Flex, Grid, Text } from "@chakra-ui/react";
import Logo from "@components/Logo";
import SocialIcons from "@components/SocialIcons";
import { utilizeModuleClasses } from "easy-css-modules";
import { ReactNode, useCallback } from "react";
import styles from "./footer.module.scss";

const $_ = utilizeModuleClasses(styles);

const Footer = () => {
  return (
    <Grid as={"section"} className={$_("footer")}>
      <BrandItems />
      <LinksItems />
      <OtherInfoItems />
    </Grid>
  );
};

const OtherInfoItems = () => {
  const ColoredText = useCallback(({ children }: { children: ReactNode }) => {
    return <Text color={"var(--accent)"}>{children}</Text>;
  }, []);
  return (
    <Flex direction={"column"} gap={"var(--spacing-3)"} align={"center"}>
      <SocialIcons />
      <ColoredText>
        © Copyright Nazmus Sakib. https://Nazmus.vercel.app
      </ColoredText>
      <ColoredText>All Right Reserved.</ColoredText>
      <ColoredText>Privacy policy</ColoredText>
      <ColoredText>Terms of use</ColoredText>
    </Flex>
  );
};

interface LINKBTNTYPE extends ButtonProps {
  children: ReactNode;
}
const LinksItems = () => {
  const LinkBtn = useCallback(({ children, ...rest }: LINKBTNTYPE) => {
    return (
      <Button
        fontFamily={"var(--ff-heading)"}
        fontSize={"var(--fs-h6)"}
        color={"var(--accent)"}
        _hover={{
          color: "var(--brand)",
        }}
        {...rest}
      >
        {children}
      </Button>
    );
  }, []);
  return (
    <Flex
      direction={"column"}
      gap={"var(--spacing-4)"}
      width={"fit-content"}
      paddingInline={"var(--spacing-6)"}
      paddingBlock={"var(--spacing-3)"}
      height={"fit-content"}
      borderInline={"1px solid var(--accent)"}
    >
      <LinkBtn>Our Menus</LinkBtn>
      <LinkBtn>Reservation</LinkBtn>
      <LinkBtn>About</LinkBtn>
      <LinkBtn>Contact us</LinkBtn>
    </Flex>
  );
};

const BrandItems = () => {
  return (
    <Flex direction={"column"} align={"center"}>
      <Logo />
      <Text color={"var(--accent)"}>Road 43, Gulshan 2, Dhaka 1212</Text>
    </Flex>
  );
};

export default Footer;
