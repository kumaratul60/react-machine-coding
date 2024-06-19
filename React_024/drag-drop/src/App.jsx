import "./App.css";
import DragMuiltipleItem from "./components/dragMuiltipleItem";
import DragSingleItem from "./components/dragSingleItemUsingReducer";
import DragSingleItemState from "./components/dragSingleItemUsingState";

function App() {
  return (
    <>
      <DragSingleItem />
      <DragSingleItemState />
      <DragMuiltipleItem />
    </>
  );
}

export default App;
