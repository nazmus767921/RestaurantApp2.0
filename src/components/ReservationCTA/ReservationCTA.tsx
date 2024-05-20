import { Box, Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./reservationCTA.module.scss";

const $_ = utilizeModuleClasses(styles);

const ReservationCTA = () => {
  return (
    <Flex
      as="section"
      className={$_("reservationCta")}
      textAlign={"center"}
      direction={"column"}
      justify={"center"}
      align={"center"}
      gap={"var(--spacing-2)"}
    >
      <TextItems />
      <ReserveBtn marginBlock={"var(--spacing-3)"} />
    </Flex>
  );
};

const TextItems = () => {
  return (
    <>
      <Text
        fontSize={"var(--fs-tag)"}
        letterSpacing={"30px"}
        marginInlineStart={"var(--spacing-4)"}
        color={"var(--brand)"}
      >
        WE SAVED YOU A SEAT
      </Text>
      <Text
        as={"h2"}
        fontSize={"8rem"}
        lineHeight={"6.5rem"}
        textTransform={"capitalize"}
      >
        Make an{" "}
        <Box as="span" color={"var(--brand)"}>
          online
        </Box>
        <br />
        Reservation
      </Text>
      <Text opacity={0.7} letterSpacing={"0.5px"} color={"var(--accent)"}>
        When the going gets tough, the tough get grilling. Bringing heat to your
        meat. No one can compete with our meat.
      </Text>
    </>
  );
};

const ReserveBtn = ({ ...rest }: ButtonProps) => {
  return (
    <Button
      width={"fit-content"}
      height={"fit-content"}
      fontSize={"var(--fs-h6)"}
      fontFamily={"var(--ff-heading)"}
      textTransform={"uppercase"}
      letterSpacing={"1px"}
      paddingBlock={"var(--spacing-2)"}
      paddingInline={"var(--spacing-1)"}
      backgroundColor={"transparent"}
      borderBlock={"1px solid var(--brand)"}
      color={"var(--brand)"}
      {...rest}
      _hover={{
        opacity: 0.7,
      }}
    >
      Make A Reservation
    </Button>
  );
};

export default ReservationCTA;
