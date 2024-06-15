import "./index.css";

const TaskList = ({ name,children }) => {
  return (
    <div className="taskList__container">
      <div className="taskList__container__header">
        <p> {name.toUpperCase()}</p>
      </div>
      {children}
      <div className="taskList__container__btn">
        <button>Add cards</button>
      </div>
    </div>
  );
};

export default TaskList;
