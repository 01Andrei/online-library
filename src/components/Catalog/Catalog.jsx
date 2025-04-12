import { Link } from "react-router-dom";
import fakeBooks from "../../fakeBooks";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <h1 className={styles.catalog__title}>📚 Каталог книг</h1>
      <div className={styles.catalog__list}>
        {fakeBooks.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className={styles.catalog__item}
          >
            <img
              src={book.cover}
              alt={book.title}
              className={styles.catalog__image}
            />
            <h2 className={styles.catalog__name}>{book.title}</h2>
            <p className={styles.catalog__author}>{book.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
