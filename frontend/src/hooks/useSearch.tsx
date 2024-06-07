import { useQuery, gql } from "@apollo/client";

const GET_BOOKSLISTSEARCH = gql`
  query Books($title: String!) {
    books(where: { title: $title }) {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useSearch = (title: string) => {
  const { loading, error, data } = useQuery(GET_BOOKSLISTSEARCH, {
    variables: { title: "Curious Princess and the Enchanted Garden" },
  });

  return { data, loading, error };
};

export default useSearch;
