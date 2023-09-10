import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const { cat, page } = searchParams;
  const _page = parseInt(page) || 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={_page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
