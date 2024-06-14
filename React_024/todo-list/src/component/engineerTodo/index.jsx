import { useEffect, useState, useRef } from "react";

const EngineerTodo = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [currentTodo, setCurrentTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data?.todos));
    // fetchTodosPromise();
  }, []);

  const fetchTodosPromise = async () => {
    const fetcTodosData = await fetch("https://dummyjson.com/todos");
    const fecthTodosResponse = await fetcTodosData.json();
    console.log(fecthTodosResponse, "::fecthTodosResponse");
  };

  // console.log(todos, "::todos");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (isEditing !== null) {
      const updateTodo = todos?.map((todoItem) =>
        todoItem.id === isEditing
          ? {
              ...todoItem,
              todo: currentTodo,
            }
          : todoItem
      );
      setTodos(updateTodo);
      setIsEditing(null);
      // setCurrentTodo("");
      inputRef.current.value = "";
    } else {
      const constructNewTodoData = {
        id: new Date().getTime(), // unique id
        todo: inputRef.current.value,
        complete: false,
        userId: todos.length + 1,
      };
      setTodos([constructNewTodoData, ...todos]);
      inputRef.current.value = "";
    }
  };

  const handleEditTodo = (id, todo) => {
    setIsEditing(id);
    setCurrentTodo(todo);
    inputRef.current.value = todo;
    inputRef.current.focus();
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo?.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((filterTodo) =>
    filterTodo?.todo.toLowerCase().includes(currentTodo.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter the todo"
          ref={inputRef}
          defaultValue={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button type="submit">{isEditing !== null ? "Update Todo" : "Add Todo"}</button>
      </form>

      {/* if not want to use form submit
      <>
        <input
          type="text"
          placeholder="Enter the todo"
          ref={inputRef}
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleAddTodo}>
          {isEditing !== null ? "Update Todo" : "Add Todo"}
        </button>
      </>
       */}

      {todos?.map((item) => (
        <ul key={item?.id}>
          <li>{item?.todo}</li>
          <button onClick={() => handleEditTodo(item?.id, item?.todo)}>Edit</button>
          <button onClick={() => handleDeleteTodo(item?.id)}>Delete</button>
        </ul>
      ))}

      {/* {filteredTodos.map((item) => (
        <ul key={item.id}>
          <li>{item.todo}</li>
          <button onClick={() => handleEditTodo(item.id, item.todo)}>Edit</button>
          <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
        </ul>
      ))} */}
    </div>
  );
};

export default EngineerTodo;
