import { ChangeEvent, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKSLISTSEARCH = gql`
  query Books($author: String!) {
    book(author: $author) {
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
function Search() {
  const [searchFilter, setSearchFilter] = useState(
    "Curious Princess and the Enchanted Garden"
  );
  const { loading, error, data } = useQuery(GET_BOOKSLISTSEARCH, {
    variables: { author: searchFilter },
  });

  error && console.log(error.message);

  data && console.log(data);

  //input change handler
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {};

  //triggers on every input change
  useEffect(() => {
    // handleSearch(bookname);
  }, [searchFilter]);
  return (
    <div className="mt-[50px] flex flex-col gap-3">
      <div>Search for a particular book</div>
      <input
        placeholder="Book"
        onChange={handleChange}
        className="border border-primary-turquoise h-9 w-full p-2"
      ></input>
      {/* {loading && <p>loading...</p>}
      {!loading && error && <p>Book not found.</p>}
      {searchResults &&
        searchResults.map((book: Book) => {
          return (
            <div className=" shadow-md rounded-sm h-[100px] overflow-auto p-3">
              search results..
              <BookSearchResult bookData={book} />
            </div>
          );
        })} */}
    </div>
  );
}

export default Search;
