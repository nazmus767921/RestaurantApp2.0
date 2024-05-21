import { Flex, Text } from "@chakra-ui/react";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./outlinedAddressCard.module.scss";

const $_ = utilizeModuleClasses(styles);

const OutlinedAddressCard = () => {
  return (
    <Flex
      direction={"column"}
      justify={"flex-start"}
      align={"center"}
      padding={"var(--spacing-3)"}
      border={"1.65px solid var(--accent)"}
      borderRadius={"var(--rounded-lg)"}
      maxW={"350px"}
      minH={"fit-content"}
      className={$_("addressCard")}
    >
      <TextContent
        title="Our Address"
        description="732/21 Second Street, Manchester, King Street, Kingston United Kingdom"
      />
      <TextContent
        title="Open Hours"
        description="Monday - Friday, 10 AM - 7 PM"
      />
    </Flex>
  );
};

const TextContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Flex
      direction={"column"}
      justify={"flex-start"}
      align={"center"}
      textAlign={"center"}
      className={$_("addressCard__textContent")}
    >
      <Text
        as={"h5"}
        marginBlockEnd={"var(--spacing-2)"}
        color={"var(--accent)"}
        textTransform={"capitalize"}
      >
        {title}
      </Text>
      <Text opacity={0.7}>{description}</Text>
    </Flex>
  );
};
export default OutlinedAddressCard;
