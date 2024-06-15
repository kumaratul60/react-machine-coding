import { useEffect, useRef } from "react";
import "./index.css";

const TaskForm = ({ addNewtaskHandler, mode, taskMode, editTaskHandler, deleteTaskHandler }) => {
  const inputRef = useRef();
  const optionRef = useRef();

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Progress", value: "progress" },
    { label: "Done", value: "done" },
  ];

  useEffect(() => {
    if (mode === "edit") {
      inputRef.current.value = taskMode?.name || "";
      optionRef.current.value = taskMode?.category || "";
    } else {
      inputRef.current.value = "";
      optionRef.current.value = "";
    }
  }, [mode, taskMode]);

  const handleFormReset = () => {
    inputRef.current.value = "";
    optionRef.current.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") {
      alert("Please enter the task");
      return;
    }
    if (optionRef.current.value.trim() === "") {
      alert("Please select a category");
      return;
    }
    const formPayload = {
      id: mode === "add" ? self.crypto.randomUUID() : taskMode.id,
      name: inputRef.current.value,
      category: optionRef.current.value,
    };

    if (mode === "add") {
      addNewtaskHandler(formPayload);
    } else {
      editTaskHandler(formPayload);
    }
    handleFormReset();
    };

    //  const handleDelete = () => {
    //    if (mode === "edit" && taskMode) {
    //      deleteTaskHandler(taskMode.id, taskMode.category);
    //      handleFormReset(); // Optionally reset the form after deletion
    //    }
    //  };

  return (
    <div className="form__container">
      <h4>{mode === "add" ? "Create new task" : "Edit task"}</h4>
      <form onSubmit={handleFormSubmit}>
        {/* if add value instead of defaultValue then make it as controlled input */}
        <input
          type="text"
          placeholder="Task title..."
          ref={inputRef}
          defaultValue={taskMode?.name || ""}
        />
        <select ref={optionRef} defaultValue={taskMode?.category || ""}>
          <option value="" disabled>
            Select category...
          </option>
          {options.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        <button type="submit">{mode === "add" ? "Add task" : "Edit task"}</button>
        {/* {mode === "edit" && (
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        )} */}
      </form>
    </div>
  );
};

export default TaskForm;
