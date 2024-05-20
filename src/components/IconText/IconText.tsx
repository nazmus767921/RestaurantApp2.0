import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  children: ReactNode;
  icon: ReactElement<IconType>;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const IconText = ({
  children,
  icon,
  size = "md",
  color = "var(--accent)",
}: Props) => {
  return (
    <Flex
      gap={".625em"}
      color={color}
      opacity={0.8}
      fontSize={
        size === "sm"
          ? "var(--fs-xs)"
          : size === "md"
          ? "var(--fs-sm)"
          : "var(--fs-base)"
      }
    >
      <Box w={"1.25em"} aspectRatio={1}>
        {icon}
      </Box>
      <Text fontSize={"inherit"}>{children}</Text>
    </Flex>
  );
};
export default IconText;
