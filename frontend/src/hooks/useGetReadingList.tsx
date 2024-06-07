//temporary holder for a reading list. Normally this would be persisted on a database.
export const readinglist: Book[] = [
  {
    title: "Curious Princess and the Enchanted Garden",
    author: "Reese Smith",
    coverPhotoURL: "assets/image2.webp",
    readingLevel: "H",
  },
  {
    title: "Clever Monster on the Wonder Island",
    author: "Jordan Jones",
    coverPhotoURL: "assets/image10.webp",
    readingLevel: "I",
  },
  {
    title: "Happy Knight and the Magic Spell",
    author: "Quinn Brown",
    coverPhotoURL: "assets/image10.webp",
    readingLevel: "I",
  },
];
const useGetReadingList = () => {
  const data = readinglist;

  return { data };
};

export default useGetReadingList;
