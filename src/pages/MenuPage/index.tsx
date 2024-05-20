import Nav from "@components/Nav/Nav";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/Menupage.module.scss";

const $_ = utilizeModuleClasses(styles);

const MenuPage = () => {
  return (
    <>
      <Nav />
    </>
  );
};

export default MenuPage;
