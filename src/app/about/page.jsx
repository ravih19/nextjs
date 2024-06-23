import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>About Agency</h2>
        <h1 className={styles.title}>
          We Create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          Engage with a vibrant community of fellow creatives, clients, and
          design enthusiasts. Join the conversation and share your thoughts,
          ideas, and feedback.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}/>
      </div>
    </div>
  );
};

export default AboutPage;
