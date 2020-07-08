import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import routes from "../roures/routres";

const Header = () => (
  <header className={styles.headreMain}>
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to={routes.TODO_PAGE}>Todo</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={routes.FORM_PAGE}>Form</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
