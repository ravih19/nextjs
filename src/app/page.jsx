import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.TextContainer}>
        <h1 className={styles.title}>Learning Next JS</h1>
        <p className={styles.desc}>
          Next.js is a powerful framework for building React applications that
          combines server-side rendering (SSR) and static site generation (SSG)
          to deliver fast, dynamic, and SEO-friendly websites
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" className={styles.brandImg} fill />
        </div>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
};

export default page;
