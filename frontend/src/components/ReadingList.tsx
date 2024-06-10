import { useState } from "react";
import useGetReadingList, { readinglist } from "../hooks/useGetReadingList";
import BookCardReadingList from "./BookCardReadingList";

function ReadingList() {
  const { data } = useGetReadingList();
  const [list, setList] = useState<Book[]>(data);

  return (
    <div className=" w-full">
      <div className="flex gap-2 flex-wrap items-center justify-around mt-10">
        {list?.map((book: Book) => (
          <BookCardReadingList
            key={Math.random()}
            bookData={book}
            setList={setList}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
