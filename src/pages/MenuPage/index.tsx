import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Banner from "@components/Banner/Banner";
import FoodCard from "@components/FoodCard/FoodCard";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import { memo, useMemo, useState } from "react";
import styles from "./styles/Menupage.module.scss";

const $_ = utilizeModuleClasses(styles);

const MenuPage = () => {
  return (
    <>
      <Nav slot={<Banner />} />
      <Grid
        as={"section"}
        className={$_("foodMenuSection @container")}
        gap={"var(--spacing-3)"}
      >
        <Sidebar />
        <FoodMenu />
      </Grid>
      <Footer />
    </>
  );
};

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>("showAll");

  const filterMenuList = useMemo(
    () => [
      {
        id: nanoid(),
        text: "Salad boxes",
      },
      {
        id: nanoid(),
        text: "Refreshing Breakfast",
      },
      {
        id: nanoid(),
        text: "Lunch Boxes",
      },
      {
        id: nanoid(),
        text: "Dinner Delight",
      },
      {
        id: nanoid(),
        text: "Drinks",
      },
    ],
    []
  );

  return (
    <Flex
      direction={"column"}
      className={$_("sidebar")}
      gap={"var(--spacing-3)"}
    >
      {/* <Text as={"h3"} textTransform={"capitalize"} color={"var(--brand)"}>
        Menu
      </Text> */}
      <menu>
        <Button
          className={$_(
            `sidebar__button ${selectedItem === "showAll" ? "isSelected" : ""}`
          )}
          onClick={() => setSelectedItem("showAll")}
        >
          All
        </Button>
        {filterMenuList.map((item) => {
          return (
            <Button
              className={$_(
                `sidebar__button ${
                  selectedItem === item.id ? "isSelected" : ""
                }`
              )}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.text}
            </Button>
          );
        })}
      </menu>
    </Flex>
  );
};

const FoodMenu = () => {
  const ViewSorter = memo(() => {
    return (
      <Flex
        justify={"space-between"}
        align={"center"}
        w={"100%"}
        h={"fit-content"}
      >
        <Box>
          <Text as={"h3"} color={"var(--brand)"}>
            Breakfast
          </Text>
          <Text
            className={$_("@is--small")}
            opacity={0.6}
            color={"var(--accent)"}
          >
            Showing Non-vegetarian
          </Text>
        </Box>
        <Text
          className={$_("@is--small")}
          opacity={0.6}
          color={"var(--accent)"}
        >
          Page 1 of 15
        </Text>
        <Text
          className={$_("@is--small")}
          opacity={0.6}
          color={"var(--accent)"}
        >
          Page 1 of 15
        </Text>
      </Flex>
    );
  });

  const FoodCards = () => {
    return (
      <Grid templateColumns={"1fr 1fr 1fr 1fr 1fr"} gap={"var(--spacing-3)"}>
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
      </Grid>
    );
  };
  return (
    <Flex direction={"column"} gap={"var(--spacing-4)"}>
      <ViewSorter />
      <FoodCards />
    </Flex>
  );
};

export default MenuPage;
