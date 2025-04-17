import { Link } from 'react-router-dom';
import { useFavoritesStore } from '../../store/favoritesStore';
import styles from './Favorites.module.css';

const Favorites = () => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    return (
        <section className={styles.favorites}>
            <h1 className={styles.title}>Избранные книги</h1>

            {favorites.length === 0 ? (
                <p className={styles.empty}>
                    Пока что здесь пусто. Добавьте книги в избранное, чтобы они появились здесь.
                </p>
            ) : (
                <div className={styles.list}>
                    {favorites.map((book) => (
                        <div key={book.id} className={styles.cardWrapper}>
                            <Link to={`/book/${book.id}`} className={styles.card}>
                                <img src={book.cover} alt={book.title} className={styles.image} />
                                <h3 className={styles.name}>{book.title}</h3>
                                <p className={styles.author}>{book.author}</p>
                            </Link>
                            <button
                                className={styles.favButton}
                                onClick={(e) => {
                                    e.preventDefault(); // чтобы не сработал переход по ссылке
                                    toggleFavorite(book);
                                }}
                                title="Удалить из избранного"
                            >
                                ★
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
