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
  console.log({ loading, error, data });

  return { data, loading, error };
};

export default useGetAllBooks;
