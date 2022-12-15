import React, { useState } from "react";

const TodoTickComplete = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [...todos, input];
    });
    setInput("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = [...todos];
    newTodo.push({ id: todos.length + 1, text: input, complete: false });
    setTodos(newTodo);
    setInput("");
  };

  const handleComplete = (id) => {
    const newTodoForComplete = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodoForComplete);
  };

  return (
    <div>
      <h1> Todo List</h1>
      <p>Implementation of todo app</p>
      <form
        // onSubmit={handleSubmit}
        onSubmit={handleAddTodo}
      >
        <input type="text" value={input} onChange={handleChange} />
        <input type="Submit" />
        {/* <button type="submit">Add</button> */}
      </form>

      <h2>Todos</h2>
      {/* {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))} */}
      <ul>
        {todos.map((todo) => {
          if (!todo.complete) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onClick={() => handleComplete(todo.id)}
                />
                {todo.text}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>

      <h2>Complete Todos</h2>
      <ul>
        {todos.map((todo) => {
          if (todo.complete) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked="checked"
                  onClick={() => handleComplete(todo.id)}
                />
                {todo.text}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <button onClick={() => setTodos([])}>Clear Todos</button>
    </div>
  );
};

export default TodoTickComplete;
