import { Link } from "react-router-dom";
import fakeBooks from "../../fakeBooks";
import styles from "./Catalog.module.css";
import { useFavoritesStore } from "../../store/favoritesStore"

const Catalog = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);


  const isFavorite = (id) => favorites.some((f) => f.id === id)

  return (
    <div className={styles.catalog}>
      <h1 className={styles.catalog__title}>📚 Каталог книг</h1>
      <div className={styles.catalog__list}>
        {fakeBooks.map((book) => (
          <div key={book.id} className={styles.catalog__item}>
            <Link
              to={`/book/${book.id}`}
              className={styles.catalog__link}
            >
              <img
                src={book.cover}
                alt={book.title}
                className={styles.catalog__image}
              />
              <h2 className={styles.catalog__name}>{book.title}</h2>
              <p className={styles.catalog__author}>{book.author}</p>
            </Link>
            <button
              className={styles.catalog__favButton}
              onClick={() => toggleFavorite(book)}
              title="Добавить в избранное"
            >
              {isFavorite(book.id) ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
