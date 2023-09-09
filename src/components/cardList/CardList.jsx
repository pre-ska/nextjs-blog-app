import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";

const CardList = async ({ page, cat }) => {
  return (
    <div className={styles.container}>
      cards list
      <Pagination />
    </div>
  );
};

export default CardList;
