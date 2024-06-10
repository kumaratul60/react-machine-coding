/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { title: 'Learn React', isCompleted: false },
        { title: 'Build a Todo App', isCompleted: false },
    ]);

    const [newTodo, setNewTodo] = useState('');

    const addTodo = (title) => {
        const newTodos = [...todos, { title, isCompleted: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (index, newTitle) => {
        const newTodos = [...todos];
        newTodos[index].title = newTitle;
        setTodos(newTodos);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo) return;
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <div className="todo-list-container">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    className="input"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            {todos.map((todo, index) =>
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            )}
        </div>

    );
};

export default TodoList;
