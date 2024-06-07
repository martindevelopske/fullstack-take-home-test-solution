import { readinglist } from "../hooks/useGetReadingList";

function BookCard({ bookData }: { bookData: Book }) {
  const { title, author, coverPhotoURL, readingLevel } = bookData;

  //just a temporary function to add to reading list-data is not persistent
  const addToreadingList = (book: Book) => {
    readinglist.push(book);
  };
  return (
    <div className="flex flex-col items-center w-3/4 md:w-1/4 rounded-md shadow-lg mb-2">
      <img src={coverPhotoURL} className="rounded-md"></img>
      <div className="flex flex-col items-center gap-2 mb-2">
        <p className=" text-secondary-turquoise-dark-2">{title}</p>
        <p className="text-sm">Author: {author}</p>
        <p className="text-sm">Reading Level: "{readingLevel}"</p>
      </div>
      <div
        className="rounded-md border bg-secondary-orange-red p-1 text-white text-sm w-3/4 mb-2 cursor-pointer hover:scale-95"
        onClick={() => addToreadingList(bookData)}
      >
        {" "}
        Add To ReadingList
      </div>
    </div>
  );
}

export default BookCard;
