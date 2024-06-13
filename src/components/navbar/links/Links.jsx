"use client";
import React, { useState } from "react";
import styles from "./Links.module.css";
import Navlink from "./navLink/Navlink";

const Links = () => {
  const ListArray = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [Open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {ListArray.map((item) => (
          <Navlink item={item} key={item.title}></Navlink>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Navlink
                key={"/admin"}
                item={{ title: "Admin", path: "/admin" }}
              ></Navlink>
            )}
            <button className={styles.logout}>LogOut</button>
          </>
        ) : (
          <Navlink
            key={"/login"}
            item={{ title: "Login", path: "/login" }}
          ></Navlink>
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {Open && (
        <div className={styles.mobileLinks}>
          {ListArray.map((item) => (
            <Navlink item={item} key={item.title}></Navlink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
