import "./App.css";
import Header from "./components/Header";
import BookAssignmentView from "./views/BookAssignmentView";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <BookAssignmentView />
      </div>
    </>
  );
}

export default App;
