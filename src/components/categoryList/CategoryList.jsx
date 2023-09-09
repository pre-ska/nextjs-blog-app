import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
    </div>
  );
};

export default CategoryList;
