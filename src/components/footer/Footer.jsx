import React from "react";
import styles from "./footer.module.css"
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={styles.text}>Learning Next JS ©. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
