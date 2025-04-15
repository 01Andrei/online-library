import { create } from 'zustand';

export const useFavoritesStore = create((set, get) => ({
  favorites: [],
  toggleFavorite: (book) => {
    const favorites = get().favorites;
    const isAlready = favorites.find((fav) => fav.id === book.id);

    set({
      favorites: isAlready
        ? favorites.filter((fav) => fav.id !== book.id)
        : [...favorites, book],
    });
  },
  isFavorite: (bookId) => {
    return get().favorites.some((fav) => fav.id === bookId);
  },
}));
