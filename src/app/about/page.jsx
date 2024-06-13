import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image src="/about.png" alt="" priority={true} fill/>
      </div>
      AboutPage
    </div>
  );
};

export default AboutPage;
