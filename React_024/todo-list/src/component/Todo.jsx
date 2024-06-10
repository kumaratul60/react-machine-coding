/* eslint-disable react/prop-types */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(index, newTitle);
        setIsEditing(false);
    };

    return (
        <div className="todo">
            {isEditing ? (
                <div className="todo-edit">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                    <div className="todo-edit-container">
                    <span style={{ textDecoration: todo?.isCompleted ? 'line-through' : '' }}>
                        {todo?.title}
                    </span>

                    <div className="todo-btnAll">

                        <button onClick={() => completeTodo(index)}>Complete</button>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Todo;
