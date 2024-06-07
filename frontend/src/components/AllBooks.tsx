import useGetAllBooks from "../hooks/useGetAllBooks";
import BookCard from "./BookCard";

function AllBooks() {
  const { data, loading, error } = useGetAllBooks();

  return (
    <div className=" w-full">
      <div className="flex gap-1 flex-wrap items-center justify-around mt-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.books?.map((book: Book) => (
            <BookCard key={Math.random()} bookData={book} />
          ))
        )}
        {error && (
          <div>Error fetching your reading List. Please Refresh the page. </div>
        )}
      </div>
    </div>
  );
}

export default AllBooks;
