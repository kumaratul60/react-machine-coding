import "./App.css";
import NestedComments from "./components/nested-comments";
import CommentsDummyData from "./data/comments.json";

function App() {
  return (
    <>
      <h1>Nested comments</h1>
      <NestedComments
        comments={CommentsDummyData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
    </>
  );
}

export default App;
