"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import { useState } from "react";
import Image from "next/image";

const Comments = ({ postSlug }) => {
  const status = "authenticated";
  const [desc, setDesc] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {/* // ! input comment */}
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      {/* // ! comments */}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex voluptates quidem amet incidunt provident corporis
            delectus aperiam quas corrupti cum quae obcaecati libero perferendis
            aliquid, molestias earum consectetur autem!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex voluptates quidem amet incidunt provident corporis
            delectus aperiam quas corrupti cum quae obcaecati libero perferendis
            aliquid, molestias earum consectetur autem!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex voluptates quidem amet incidunt provident corporis
            delectus aperiam quas corrupti cum quae obcaecati libero perferendis
            aliquid, molestias earum consectetur autem!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex voluptates quidem amet incidunt provident corporis
            delectus aperiam quas corrupti cum quae obcaecati libero perferendis
            aliquid, molestias earum consectetur autem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
