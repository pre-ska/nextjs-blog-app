import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = async ({ params }) => {
  const { slug } = params;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi quisquam consequatur atque ullam eius perspiciatis tempore
              saepe non dolore. Necessitatibus nostrum, quasi tempora atque
              temporibus dolorem illo laborum obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi quisquam consequatur atque ullam eius perspiciatis tempore
              saepe non dolore. Necessitatibus nostrum, quasi tempora atque
              temporibus dolorem illo laborum obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi quisquam consequatur atque ullam eius perspiciatis tempore
              saepe non dolore. Necessitatibus nostrum, quasi tempora atque
              temporibus dolorem illo laborum obcaecati.
            </p>
            <h3>kjdslkadlks lkj</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi quisquam consequatur atque ullam eius perspiciatis tempore
              saepe non dolore. Necessitatibus nostrum, quasi tempora atque
              temporibus dolorem illo laborum obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sequi quisquam consequatur atque ullam eius perspiciatis tempore
              saepe non dolore. Necessitatibus nostrum, quasi tempora atque
              temporibus dolorem illo laborum obcaecati.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
