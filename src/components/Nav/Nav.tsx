import { Box, Button, Flex, Grid, Menu, MenuButton } from "@chakra-ui/react";
import Logo from "@components/Logo";
import { routes } from "@pages/routes";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import { ReactElement } from "react";
import { WiDaySunny } from "react-icons/wi";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./nav.module.scss";

const $_ = utilizeModuleClasses(styles);

const navLinks = [
  {
    id: nanoid(),
    text: "Home",
    url: routes.HOME_ROUTE,
  },
  {
    id: nanoid(),
    text: "Menu",
    url: routes.FOOD_MENU_ROUTE,
  },
  {
    id: nanoid(),
    text: "contact",
    url: routes.CONTACT_ROUTE,
  },
  {
    id: nanoid(),
    text: "Reservation",
    url: routes.RESERVATION_ROUTE,
  },
];

const Nav = ({
  className,
  slot,
}: {
  className?: string;
  slot?: ReactElement;
}) => {
  return (
    <Box className={className}>
      <Grid
        className={`${$_("navbar @container")}`}
        gridTemplateColumns={"10.5rem 1fr 10.5rem"}
        placeItems={"center"}
        paddingBlock={"var(--spacing-1)"}
      >
        <Logo />
        <NavMenu />
        <DarkModeToggle />
      </Grid>
      {slot}
    </Box>
  );
};

const NavMenu = () => {
  return (
    <Flex justify={"center"} align={"center"} gap={'var(--spacing-2)'}>
      {navLinks.map((navlink) => {
        return (
          <MenuBtn key={navlink.id} url={navlink.url}>
            {navlink.text}
          </MenuBtn>
        );
      })}
    </Flex>
  );
};

const MenuBtn = ({
  children,
  url,
}: {
  children: ReactElement | string;
  url: string;
}) => {

  const match = useMatch(url);
  return (
    <Menu>
      <NavLink to={url}>
        <MenuButton
          color={"var(--accent)"}
          paddingBlock={"var(--spacing-1)"}
          textTransform={"capitalize"}
          flexDirection={"column"}
          overflow={"hidden"}
          position={"relative"}
          className={$_(`navbar__menuBtn ${match ? "isActive" : ""}`)}
        >
          {children}
        </MenuButton>
      </NavLink>
    </Menu>
  );
};

const DarkModeToggle = () => {
  return (
    <Button
      w={"1.875rem"}
      aspectRatio={1}
      color={"var(--accent)"}
      justifySelf={"end"}
      _hover={{
        color: "var(--brand)",
      }}
    >
      <WiDaySunny />
    </Button>
  );
};

export default Nav;
