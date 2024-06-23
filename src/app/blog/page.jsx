// "use client";
import React from "react";
import styles from "./blog.module.css";
import Postcard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data";

//USING API KEY
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (response) => response.json()
//   );
//   return res;
// };

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
