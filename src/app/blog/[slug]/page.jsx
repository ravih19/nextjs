import React from "react";
import styles from "./singlepostcard.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      {1 == 1 && (
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" width={30} height={30} className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}></div>
        <div className={styles.content}>Description</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
