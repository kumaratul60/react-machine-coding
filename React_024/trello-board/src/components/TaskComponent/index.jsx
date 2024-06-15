import { useState } from "react";
import { todoData } from "../../dummyData";
import TaskList from "../TaskList";
import TaskCard from "../TaskCard";
import TaskForm from "../TaskForm";

import "./index.css";

/***
 Why to use self.crypto.randomUUID(), not Math.random()?
 -> Math.randome not provide a wide range
 -> It is not very consistent
 -> It can be easier chance to get the same number twice

 -> self.crypto.randomUUID() -> always give wide range unique id
 */

const TaskComponent = () => {
  const [tasks, setTasks] = useState(todoData);
  const [isEditing, setIsEditing] = useState(null);
  const categories = Object.keys(tasks);

  const renderCategories = (taskcategory) => {
    const categoryResult = taskcategory.map((category, idx) => (
      <TaskList key={idx} name={category}>
        {tasks[category].map((taskNameByCategory) => (
          <div>
            <TaskCard
              key={taskNameByCategory?.id}
              taskName={taskNameByCategory}
              setIsEditing={setIsEditing}
            />
          </div>
        ))}
      </TaskList>
    ));
    return categoryResult;
  };

  const addNewtaskHandler = (addPayload) => {
    const { category } = addPayload;
    const updatedTasks = [...(tasks[category] || []), addPayload];

    setTasks((prev) => ({
      ...prev,
      [category]: updatedTasks,
    }));
  };

  const editTaskHandler = (editPayload) => {
    const { id, category } = editPayload;
    const updatedTasks = { ...tasks };

    // Find the task in the old category and remove it
    Object.keys(updatedTasks).forEach((cat) => {
      updatedTasks[cat] = updatedTasks[cat].filter((task) => task.id !== id);
    });

    // Add the updated task to the new category
    updatedTasks[category] = [...(updatedTasks[category] || []), editPayload];

    setTasks(updatedTasks);
    setIsEditing(null); // Reset the editing state
  };

  // const deleteTaskHandler = (taskId, category) => {
  //   const updatedTasks = { ...tasks };
  //   updatedTasks[category] = updatedTasks[category].filter((task) => task.id !== taskId);

  //   setTasks(updatedTasks);
  // };

  return (
    <div className="task__container">
      <TaskForm
        mode={isEditing ? "edit" : "add"}
        taskMode={isEditing}
        addNewtaskHandler={addNewtaskHandler}
        editTaskHandler={editTaskHandler}
        // deleteTaskHandler={deleteTaskHandler}
      />
      <div className="task__container__category">{renderCategories(categories)}</div>
    </div>
  );
};

export default TaskComponent;
