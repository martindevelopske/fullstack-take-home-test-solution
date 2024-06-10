import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { readinglist } from "../hooks/useGetReadingList";
import { useState } from "react";

function BookSearchResult({ bookData }: { bookData: Book }) {
  const [buttonText, setButtonText] = useState<string>("Add To ReadingList");
  const { title, coverPhotoURL } = bookData;

  const addToreadingList = (book: Book) => {
    readinglist.push(book);
    setButtonText("Added");
  };
  return (
    <div className="border flex h-auto p-1 rounded-md bg-white text-black gap-2">
      <img src={coverPhotoURL} className="h-[100px] w-[100px]"></img>
      <div className="flex flex-col items-center justify-between">
        {title}

        <div
          className="rounded-md border bg-secondary-orange-red p-1 text-white text-sm w-5/6 mb-2 cursor-pointer hover:scale-95 flex gap-2 items-center justify-around"
          onClick={() => addToreadingList(bookData)}
        >
          {" "}
          {buttonText}
          {buttonText == "Added" ? <CheckIcon /> : <AddIcon />}
        </div>
      </div>
    </div>
  );
}

export default BookSearchResult;
