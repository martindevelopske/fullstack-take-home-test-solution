import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_BOOKS = gql`
  query SearchBooks($title: String!) {
    searchBooks(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const useSearch = (title: string | null) => {
  const [searchBooks, { loading, error, data }] = useLazyQuery(SEARCH_BOOKS, {
    variables: { title: title },
  });

  return { searchBooks, data, loading, error };
};

export default useSearch;
