import { Flex, Stack, Text } from "@chakra-ui/react";
import Button from "@components/Button/Button";
import FoodCard, { FoodCardProps } from "@components/FoodCard/FoodCard";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "../styles/featuredMenu.module.scss";

const $_ = utilizeModuleClasses(styles);

interface FoodData extends FoodCardProps {
  id: string;
}

const foodData: FoodData[] = [
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
];

const FeaturedMenu = () => {
  return (
    <Flex
      as={"section"}
      className={$_("featuredMenu")}
      direction={"column"}
      paddingBlockEnd={"var(--spacing-5)"}
    >
      <TitleRow />
      <MenuStack />
    </Flex>
  );
};

const TitleRow = () => {
  return (
    <Flex minHeight={"20rem"} className={$_("featuredMenu__titleRow")}>
      <Flex w={"50%"}>
        <Flex
          justify={"center"}
          align={"center"}
          w={"100%"}
          className={$_("featuredMenu__titleRowCard")}
        >
          <Text as={"h2"} className={$_("featuredMenu__title")}>
            The choice is easy when it's real food. Eat real. Feel real.
          </Text>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        w={"50%"}
        justifySelf={"flex-end"}
      >
        <Button>Show More</Button>
      </Flex>
    </Flex>
  );
};

const MenuStack = () => {
  return (
    <Stack
      direction={"row"}
      className={$_("featuredMenu__menuStack @container")}
      gap={"var(--spacing-3)"}
    >
      {foodData.map((food) => {
        const { image, name, description, price } = food;
        return (
          <FoodCard
            image={image}
            name={name}
            description={description}
            price={price}
          />
        );
      })}
    </Stack>
  );
};

export default FeaturedMenu;
