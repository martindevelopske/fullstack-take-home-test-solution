import useGetReadingList from "../hooks/useGetReadingList";
import BookCard from "./BookCard";

function ReadingList() {
  const { data } = useGetReadingList();

  return (
    <div className=" w-full">
      <div className="flex gap-2 flex-wrap items-center justify-around mt-10">
        {data?.map((book: Book) => (
          <BookCard key={Math.random()} bookData={book} />
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
