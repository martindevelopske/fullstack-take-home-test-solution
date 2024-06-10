import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { readinglist } from "../hooks/useGetReadingList";
import { Dispatch, SetStateAction, useState } from "react";

function BookCardReadingList({
  bookData,
  setList,
}: {
  bookData: Book;
  setList: Dispatch<SetStateAction<Book[]>>;
}) {
  const [buttonText, setButtonText] = useState<string>(
    "Remove From ReadingList"
  );
  const { title, author, coverPhotoURL, readingLevel } = bookData;

  //just a temporary function to add to reading list-data is not persistent
  const removefromreadinglist = (book: Book) => {
    setList((prev) => prev.filter((item) => item !== book));

    setButtonText("Removed");
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
        className="rounded-md border bg-secondary-orange-red p-1 text-white text-sm w-5/6 mb-2 cursor-pointer hover:scale-95 flex gap-2 items-center justify-around"
        onClick={() => removefromreadinglist(bookData)}
      >
        {" "}
        {buttonText}
        {buttonText == "Removed" ? <CheckIcon /> : <DeleteIcon />}
      </div>
    </div>
  );
}

export default BookCardReadingList;
