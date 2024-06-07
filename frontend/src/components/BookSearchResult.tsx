import { readinglist } from "../hooks/useGetReadingList";

function BookSearchResult({ bookData }: { bookData: Book }) {
  const { title, author, coverPhotoURL, readingLevel } = bookData;
  console.log(bookData);

  const addToreadingList = (book: Book) => {
    readinglist.push(book);
  };
  return (
    <div className="border flex h-auto">
      <img src={coverPhotoURL} className="h-[100px] w-[100px]"></img>
      <div className="flex flex-col items-center justify-between">
        {title}
        {/* <p>{author}</p>
        {readingLevel} */}
        <div
          className="rounded-md border bg-secondary-orange-red p-1 text-white text-sm w-full mb-2 cursor-pointer hover:scale-95"
          onClick={() => addToreadingList(bookData)}
        >
          {" "}
          Add To ReadingList
        </div>
      </div>
    </div>
  );
}

export default BookSearchResult;
