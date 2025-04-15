import { useParams } from 'react-router-dom';
import fakeBooks from '../../fakeBooks';
import styles from './BookDetails.module.css'; // МОДУЛЬНЫЕ СТИЛИ

const BookDetails = () => {
    const { id } = useParams();
    const book = fakeBooks.find((book) => book.id === id);

    if (!book) {
        return <h2 className={styles.message}>Книга не найдена</h2>;
    }

    return (
        <div className={styles.book}>
            <div className={styles.container}>
                <img className={styles.cover} src={book.cover} alt={book.title} />
                <h1 className={styles.title}>{book.title}</h1>
                <p className={styles.author}>{book.author}</p>
                <p className={styles.description}>
                    Это подробное описание книги <strong>{book.title}</strong>. Здесь будет информация о сюжете, персонажах и многом другом.
                </p>
            </div>
        </div>
    );
};

export default BookDetails;
