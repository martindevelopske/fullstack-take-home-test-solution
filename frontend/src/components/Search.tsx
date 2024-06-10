import { ChangeEvent, useEffect, useState } from "react";
import BookSearchResult from "./BookSearchResult";
import useSearch from "../hooks/useSearch";

function Search() {
  const [searchFilter, setSearchFilter] = useState<string | null>(null);

  const { searchBooks, loading, error, data } = useSearch(searchFilter);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchFilter(value);
  };

  useEffect(() => {
    // Perform the search when searchFilter changes
    if (searchFilter === "") {
      searchBooks({ variables: { title: null } });
    } else {
      searchBooks({ variables: { title: searchFilter } });
    }
  }, [searchBooks, searchFilter]);
  return (
    <div className="mt-[50px] flex flex-col gap-3 w-full">
      <div>Search for a particular book</div>
      <div className="flex gap-3 w-full">
        <input
          placeholder="Book"
          onChange={handleChange}
          className="border border-primary-turquoise h-9 w-full p-2"
          value={searchFilter ? searchFilter : ""}
        ></input>
        <div
          className="rounded-md border bg-secondary-orange-red p-1 text-white text-sm w-16 flex items-center justify-center mb-2 cursor-pointer hover:scale-95"
          onClick={() => {
            setSearchFilter("");
          }}
        >
          {" "}
          Clear
        </div>
      </div>
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
