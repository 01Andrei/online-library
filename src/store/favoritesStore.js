import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (book) => {
        const favorites = get().favorites;
        const isAlready = favorites.some((fav) => fav.id === book.id);

        set({
          favorites: isAlready
            ? favorites.filter((fav) => fav.id !== book.id)
            : [...favorites, book],
        });
      },
    }),
    {
      name: 'favorites-storage', // ключ в localStorage
    }
  )
);
