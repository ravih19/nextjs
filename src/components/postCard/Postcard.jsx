"use client";
import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";
const Postcard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://media.gettyimages.com/id/2116292040/photo/medium-wide-shot-client-looking-at-fabric-samples-in-tailors-workshop.jpg?s=1024x1024&w=gi&k=20&c=QYOvQ6Tj9niDkaulTmIdpEzt3OUwDDiiaxeqJ-IR0nA="
            alt=""
            className={styles.img}
            fill
          ></Image>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>DESC</p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
