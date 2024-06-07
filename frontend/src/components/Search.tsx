import { ChangeEvent, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import BookSearchResult from "./BookSearchResult";

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
  const [searchFilter, setSearchFilter] = useState<string | null>(null);
  // const [books, setBooks] = useState<Book[] | null>(null);
  // const [result, setResult] = useState<Book[] | null>(null);
  // const [searchError, setSearchError] = useState<string>(null);
  const [searchBooks, { loading, error, data }] = useLazyQuery(SEARCH_BOOKS, {
    variables: { title: "Garden" },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
    searchBooks({ variables: { title: searchFilter } });

    // Check if input value is empty
    if (!e.target.value.trim()) {
      // Reset the data state to null
      searchBooks({ variables: { title: null } });
    } else {
      // Otherwise, perform the search
      searchBooks({ variables: { title: "" } });
    }
  };

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
      {data?.searchBooks && (
        <div className="shadow-md rounded-sm h-[300px] bg-gray-400 text-white overflow-auto p-3 border z-50 flex flex-col w-full items-center gap-1">
          search results..
          {data?.searchBooks?.map((book: Book) => {
            return <BookSearchResult bookData={book} key={Math.random()} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
