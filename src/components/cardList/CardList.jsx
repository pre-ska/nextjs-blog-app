import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = async ({ page, cat }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />

        <Card />
      </div>
      cards list
      <Pagination />
    </div>
  );
};

export default CardList;
