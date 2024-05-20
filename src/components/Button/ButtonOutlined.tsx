import { Box, ButtonProps, Button as CButton } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";

interface MyButtonProps extends ButtonProps {
  children: string | ReactElement;
  icon?: ReactElement<IconType>;
  color?: string;
}

const Button = ({ children, icon, color, ...rest }: MyButtonProps) => {
  return (
    <CButton
      width={"fit-content"}
      height={"fit-content"}
      textTransform={"capitalize"}
      fontSize={"var(--fs-h6)"}
      fontFamily={"var(--ff-heading)"}
      paddingBlock={"0.625rem"}
      paddingInline={"1.25rem"}
      backgroundColor={"transparent"}
      borderRadius={"var(--rounded-sm)"}
      color={color || "var(--accent)"}
      outline={`1.25px solid ${color || "var(--accent)"}`}
      _hover={{
        opacity: 0.7,
      }}
      {...rest}
    >
      {icon ? (
        <Box
          as="span"
          w={"1em"}
          aspectRatio={1}
          marginInlineEnd={"var(--spacing-1)"}
        >
          {icon}
        </Box>
      ) : null}
      {children}
    </CButton>
  );
};

export default Button;
