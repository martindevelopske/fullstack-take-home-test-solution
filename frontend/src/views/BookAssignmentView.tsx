import React, { useState } from "react";
import Search from "../components/Search";
import AllBooks from "../components/AllBooks";
import ReadingList from "../components/ReadingList";

function BookAssignmentView() {
  const [activeTab, setActiveTab] = useState("allBooks");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-[70px] flex flex-col gap-5 w-3/4">
      <div className="w-5/6 md:w-1/2 lg:w-1/3 h-[150px]">
        <div className="w-full flex-col flex">
          <Search />
        </div>
      </div>
      <div className="flex gap-5">
        <div
          className={`text-primary-turquoise md:text-2xl cursor-pointer ${
            activeTab === "allBooks" && "border-b border-primary-steel-blue"
          }`}
          onClick={() => handleTabChange("allBooks")}
        >
          All Books
        </div>
        <div
          className={`text-primary-turquoise md:text-2xl cursor-pointer ${
            activeTab === "readingList" && "border-b border-primary-steel-blue"
          }`}
          onClick={() => handleTabChange("readingList")}
        >
          Reading List
        </div>
      </div>
      {activeTab === "allBooks" ? <AllBooks /> : <ReadingList />}
    </div>
  );
}

export default BookAssignmentView;
