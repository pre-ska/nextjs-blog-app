import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Discover <b>stories</b> and creative <b>ideas</b>.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="hero" fill />
        </div>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            consequuntur, quisquam, quisquam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Illum nobis fuga accusantium totam
            esse aut, ipsum aliquid voluptatem facere nulla quo distinctio
            voluptas vel, hic maxime, quis in nemo? Incidunt?
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
