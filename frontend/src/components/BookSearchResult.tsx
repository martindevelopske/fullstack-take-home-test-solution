function BookSearchResult({ bookData }: { bookData: Book }) {
  const { title, author, coverPhotoURL, readingLevel } = bookData;
  return (
    <div>
      <img src={coverPhotoURL}></img>
      <div>
        {title}
        <p>{author}</p>
        {readingLevel}
      </div>
    </div>
  );
}

export default BookSearchResult;
