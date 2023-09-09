"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      {theme === "dark" ? (
        <Image src="/sun.png" alt="" width={14} height={14} />
      ) : (
        <Image src="/moon.png" alt="" width={14} height={14} />
      )}
    </div>
  );
  // return (
  //   <div
  //     className={styles.container}
  //     onClick={toggleTheme}
  //     style={
  //       theme === "dark"
  //         ? { backgroundColor: "#0f172a" }
  //         : { backgroundColor: "white" }
  //     }
  //   >
  //     <Image src="/moon.png" alt="" width={14} height={14} />
  //     <div
  //       className={styles.ball}
  //       style={
  //         theme === "dark"
  //           ? { left: 1, background: "white" }
  //           : { right: 1, background: "#0f172a" }
  //       }
  //     ></div>
  //     <Image src="/sun.png" alt="" width={14} height={14} />
  //   </div>
  // );
};

export default ThemeToggle;
