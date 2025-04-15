import { useState } from 'react';
import styles from './Favorites.module.css';

const Favorites = () => {
    // Пока что мок: можно позже заменить на контекст/LS/API
    const [favorites, setFavorites] = useState([
        {
            id: '1',
            title: '1984',
            author: 'George Orwell',
            cover: 'https://placehold.co/200x300?text=1984',
        },
        {
            id: '2',
            title: 'Brave New World',
            author: 'Aldous Huxley',
            cover: 'https://placehold.co/200x300?text=Brave+New+World',
        },
    ]);

    return (
        <section className={styles.favorites}>
            <h1 className={styles.title}>Избранные книги</h1>

            {favorites.length === 0 ? (
                <p className={styles.empty}>Пока что здесь пусто. Добавьте книги в избранное, чтобы они появились здесь.</p>
            ) : (
                <div className={styles.list}>
                    {favorites.map((book) => (
                        <div key={book.id} className={styles.card}>
                            <img src={book.cover} alt={book.title} className={styles.image} />
                            <h3 className={styles.name}>{book.title}</h3>
                            <p className={styles.author}>{book.author}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
