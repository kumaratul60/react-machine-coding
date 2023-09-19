import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodoMatch) =>
        prevTodoMatch.id === id
          ? { ...prevTodoMatch, completed: !prevTodoMatch.completed }
          : prevTodoMatch
      )
    );
  };

  const getStoredTodos = () =>
    JSON.parse(localStorage.getItem("todoItem")) || [];

  const storeTodosInLocalStorage = (todos) => {
    localStorage.setItem("todoItem", JSON.stringify(todos));
  };

  useEffect(() => {
    // localStorage.getItem('todoItem')=> give a massive string
    // JSON.parse(localStorage.getItem("todoItem")) => give result in JSON manner
    const storedTodos = getStoredTodos();
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    storeTodosInLocalStorage(todos);
  }, [todos]);

  const todoItems = todos.map((todo) => (
    <div key={todo.id} className="w-full">
      <TodoItem todo={todo} />
    </div>
  ));

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
          <h1 className="mt-2 mb-8 text-2xl font-bold text-center">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))} */}

            {todoItems}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
