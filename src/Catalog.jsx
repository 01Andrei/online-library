import { Link } from "react-router-dom";
import fakeBooks from "./fakeBooks";
import './Catalog.css'; // Подключаем стили

const Catalog = () => {
  return (
    <div className="catalog">
      <h1 className="catalog__title">📚 Каталог книг</h1>
      <div className="catalog__list">
        {fakeBooks.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="catalog__item">
            <img
              src={book.cover}
              alt={book.title}
              className="catalog__image"
            />
            <h2 className="catalog__name">{book.title}</h2>
            <p className="catalog__author">{book.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
