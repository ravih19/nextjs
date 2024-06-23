import React from "react";
import styles from "./blog.module.css";
import Postcard from "@/components/postCard/Postcard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
    </div>
  );
};

export default BlogPage;
