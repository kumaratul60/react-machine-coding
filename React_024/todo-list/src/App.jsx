// import "./App.css";
// import TodoList from "./component/TodoList";
import EngineerTodo from "./component/engineerTodo";
import EngineerToggleTodo from "./component/engineerTodo/toggleEditTodo";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <EngineerTodo />
      {/* <EngineerToggleTodo/> */}
    </div>
  );
}

export default App;
