import React from "react";
import styles from "./singlepostcard.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   ).then((response) => response.json());
//   return res;
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {1 == 1 && (
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}01.01.2024
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
