import { useQuery, gql } from "@apollo/client";

const GET_BOOKSLIST = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useGetAllBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKSLIST);

  return { data, loading, error };
};

export default useGetAllBooks;
