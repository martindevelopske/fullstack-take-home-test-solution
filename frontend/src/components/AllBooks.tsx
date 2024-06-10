import { useState } from "react";
import useGetAllBooks from "../hooks/useGetAllBooks";
import BookCard from "./BookCard";

function AllBooks() {
  const { data, loading, error } = useGetAllBooks();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const totalBooks = data?.books?.length || 0;
  console.log(endIndex, totalBooks);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scroll(0, 0);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scroll(0, 0);
  };
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="flex gap-1 flex-wrap items-center justify-around mt-10">
        {loading && <div>Loading...</div>}
        {data &&
          data?.books
            ?.slice(startIndex, endIndex) // Slice data based on current page
            .map((book: Book) => <BookCard key={book.title} bookData={book} />)}

        {error && (
          <div>Error fetching your reading List. Please Refresh the page. </div>
        )}
      </div>
      <div className="flex gap-2 p-2 mb-10 border-t w-full">
        {/* <button
          onClick={() => {
            setCurrentPage((prevPage) => prevPage - 1);
            window.scroll(0, 0);
          }}
          disabled={currentPage === 1}
          className="border text-white bg-secondary-orange-red p-2 rounded-md"
        >
          Previous Page
        </button>
        <div className="p-2 flex items-center">{currentPage}</div>
        <button
          onClick={() => {
            setCurrentPage((prevPage) => prevPage + 1);
            //scroll to top
            window.scroll(0, 0);
          }}
          disabled={!data?.books || data?.books?.length < itemsPerPage}
          className="border text-white bg-secondary-orange-red p-2 rounded-md"
        >
          Next Page
        </button> */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="border text-white bg-secondary-orange-red p-2 rounded-md disabled:bg-gray-500"
        >
          Previous Page
        </button>
        <div className="p-2 flex items-center">{currentPage}</div>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= totalBooks}
          className="border text-white bg-secondary-orange-red p-2 rounded-md disabled:bg-gray-500"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default AllBooks;
