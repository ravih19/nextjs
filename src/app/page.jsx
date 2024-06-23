"use client";
import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleExternalClick = () => {
    window.open("https://nextjs.org/", "_blank", "noopener,noreferrer");
  };

  const handleInternalClick = () => {
    const url = "/contact";
    const newTab = window.open(url, "_blank", "noopener,noreferrer");

    if (newTab) {
      newTab.onload = () => {
        router.push(url);
      };
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.TextContainer}>
        <h1 className={styles.title}>Creative Visionary Portfolio</h1>
        <p className={styles.desc}>
          Next.js is a powerful framework for building React applications that
          combines server-side rendering (SSR) and static site generation (SSG)
          to deliver fast, dynamic, and SEO-friendly websites
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleExternalClick}>
            Learn More
          </button>
          <button className={styles.button} onClick={() => router.push('/contact')}>
            Contact
          </button>
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
