import { Button, Flex } from "@chakra-ui/react";
import { ReactElement, useCallback } from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

const SocialIcons = () => {
  const CustomSizedIconWrapper = useCallback(
    ({ children }: { children: ReactElement<IconType> }) => {
      return (
        <Button
          w={"2rem"}
          aspectRatio={1}
          opacity={0.7}
          _hover={{ color: "var(--brand)" }}
        >
          {children}
        </Button>
      );
    },
    []
  );
  return (
    <Flex gap={"var(--spacing-3)"} color={"var(--accent)"} justifySelf={"end"}>
      <CustomSizedIconWrapper>
        <FaFacebook />
      </CustomSizedIconWrapper>
      <CustomSizedIconWrapper>
        <FaSquareInstagram />
      </CustomSizedIconWrapper>
    </Flex>
  );
};

export default SocialIcons;
