import Nav from "@components/Nav/Nav";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/reservationpage.module.scss";

const $_ = utilizeModuleClasses(styles);

const ReservationPage = () => {
  return (
    <>
      <Nav />
    </>
  );
};

export default ReservationPage;
