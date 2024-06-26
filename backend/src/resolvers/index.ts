import { booksData } from "../data/books";

export const resolvers = {
  Query: {
    books: () => booksData,
    searchBooks: (_: undefined, { title }: { title: string }) => {
      const books = booksData.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
      return books;
    },
  },
};
