import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/contactpage.module.scss";
import Nav from "@components/Nav/Nav";

const $_ = utilizeModuleClasses(styles);

const ContactPage = () => {
  return <>
  <Nav />
</>;
};

export default ContactPage;
