import React from "react";
import Styles from "../styles/Navbar.module.css";
import Logo from "../../src/assets/logo.png";
import Contact from "../../src/assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={Styles.Navbar}>
      <img src={Logo} alt="Logo" className={Styles.logo} />
      <div className={Styles.desktop_menu}>
        <Link className={Styles.desktopMenuList_item}>Home</Link>
        <Link className={Styles.desktopMenuList_item}>About</Link>
        <Link className={Styles.desktopMenuList_item}>Portfolio</Link>
        <Link className={Styles.desktopMenuList_item}>Resume</Link>
      </div>
      <button className={Styles.desktopMenu_btn}>
        <img src={Contact} alt=""className={Styles.desktopMenu_img}  /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
