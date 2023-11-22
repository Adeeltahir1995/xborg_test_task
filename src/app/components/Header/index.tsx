import React from "react";

import Image from "next/image";

import styles from "./index.module.scss";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Image src={Logo} alt="xborg header" />
      <button className="button">Explore Apps</button>
    </header>
  );
};

export default Header;
