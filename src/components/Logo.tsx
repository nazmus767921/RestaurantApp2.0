import { Box, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <div>
      <Text
        fontSize={48}
        fontFamily={"var(--ff-heading)"}
        color={"var(--accent)"}
      >
        Res
        <Box as="span" color={"var(--brand)"}>
          2Rant
        </Box>
      </Text>
    </div>
  );
};
export default Logo;
