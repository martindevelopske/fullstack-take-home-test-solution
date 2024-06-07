import { ChangeEvent, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import BookSearchResult from "./BookSearchResult";

const GET_BOOKSLIST = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const SEARCH_BOOKS = gql`
  query SearchBooks($title: String!) {
    searchBooks(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
function Search() {
  const [searchFilter, setSearchFilter] = useState(
    "Curious Princess and the Enchanted Garden"
  );
  // const [books, setBooks] = useState<Book[] | null>(null);
  // const [result, setResult] = useState<Book[] | null>(null);
  // const [searchError, setSearchError] = useState<string>(null);
  const [searchBooks, { loading, error, data }] = useLazyQuery(SEARCH_BOOKS, {
    variables: { title: "Garden" },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchFilter(value);
    searchBooks({ variables: { title: value } });
  };
  error && console.log(error.message);

  console.log(data);

  return (
    <div className="mt-[50px] flex flex-col gap-3">
      <div>Search for a particular book</div>
      <input
        placeholder="Book"
        onChange={handleChange}
        className="border border-primary-turquoise h-9 w-full p-2"
      ></input>
      {loading && <p>loading....</p>}
      {error && <p>no result found</p>}
      <div className="shadow-md rounded-sm h-[300px] bg-gray-400 text-white overflow-auto p-3 border z-50 flex flex-col w-full items-center">
        search results..
        {data?.searchBooks?.map((book: Book) => {
          return <BookSearchResult bookData={book} />;
        })}
      </div>
      );
    </div>
  );
}

export default Search;
