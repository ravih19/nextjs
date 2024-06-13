import React from "react";
import Links from "@/components/navbar/links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
