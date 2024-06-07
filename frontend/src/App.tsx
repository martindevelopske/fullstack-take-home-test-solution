import "./App.css";
import Header from "./components/Header";
import BookAssignmentView from "./views/BookAssignmentView";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex flex-col items-center">
          <Header />
          <BookAssignmentView />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
