import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./foodCard.module.scss";

const $_ = utilizeModuleClasses(styles);

interface FoodMenuTextProps {
  name: string;
  description: string;
  price: number;
}

export interface FoodCardProps extends FoodMenuTextProps {
  image: string;
  isBlur?: boolean;
}

const FoodCard = ({
  image,
  name,
  description,
  price,
  isBlur,
}: FoodCardProps) => {
  return (
    <Flex
      direction={"column"}
      className={$_(`foodCard ${isBlur ? "isBlur" : ""}`)}
      gap={"0.5rem"}
    >
      <Flex justify={"center"} align={"center"}>
        <Image src={`/images/${image}`} objectFit={"contain"} />
      </Flex>
      <FoodMenuText name={name} description={description} price={price} />
    </Flex>
  );
};

const FoodMenuText = ({ name, description, price }: FoodMenuTextProps) => {
  return (
    <Flex direction={"inherit"} gap={"1rem"}>
      <Text as={"h5"} color={"var(--brand)"}>
        {name}
      </Text>
      <Text opacity={0.6}>{description}</Text>
      <Text as={"h6"} color={"var(--accent)"}>
        <Box
          as="span"
          color={"var(--brand)"}
          marginInlineEnd={"var(--spacing-1)"}
        >
          $
        </Box>
        {price}
      </Text>
    </Flex>
  );
};

export default FoodCard;
