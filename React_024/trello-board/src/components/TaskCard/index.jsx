import "./index.css";

const TaskCard = ({ taskName, setIsEditing }) => {
  return (
    <div className="taskcard__contanier">
      <p>{taskName.name}</p>
      <button onClick={() => setIsEditing(taskName)}>Edit</button>
      {/* <button onClick={() => deleteTaskHandler(taskName.id, taskName.category)}>Remove</button> */}
    </div>
  );
};

export default TaskCard;
