import { Button as CButton } from "@chakra-ui/react";
import { ReactElement } from "react";

const Button = ({ children }: { children: string | ReactElement }) => {
  return (
    <CButton
      width={"fit-content"}
      height={"fit-content"}
      textTransform={"capitalize"}
      fontSize={"var(--fs-h6)"}
      fontFamily={"var(--ff-heading)"}
      paddingBlock={"0.625rem"}
      paddingInline={"1.25rem"}
      backgroundColor={"var(--brand)"}
      borderRadius={"var(--rounded-sm)"}
      color={"var(--background)"}
      _hover={{
        opacity: 0.7,
      }}
    >
      {children}
    </CButton>
  );
};

export default Button;
