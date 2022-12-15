import { useState, useEffect } from "react";
import "./Form.css";

const DynamicForm = () => {
  const [users, setUsers] = useState([
    { firstName: "", lastName: "", email: "", password: "" },
  ]);
  const [showData, setShowData] = useState(false);
  const handleAdd = () => {
    let newUser = { firstName: "", lastName: "", email: "", password: "" };
    setShowData(false);
    setUsers((prev) => [...prev, newUser]);
  };
  const handleRemove = (e, index) => {
    e.preventDefault();
    console.log(index);
    let data = [...users];
    data.splice(index, 1);
    console.log(data);
    setUsers(data);
  };
  const handleFirstNameChange = (e, i) => {
    console.log(i);
    console.log(e.target.value);
    let temp = [...users];
    temp[i].firstName = e.target.value;
    setUsers(temp);
  };
  const handleLastNameChange = (e, i) => {
    let temp = [...users];
    temp[i].lastName = e.target.value;

    setUsers(temp);
  };
  const handleEmailChange = (e, i) => {
    let temp = [...users];
    temp[i].email = e.target.value;
    setUsers(temp);
  };
  const handlePasswordChange = (e, i) => {
    let temp = [...users];
    temp[i].password = e.target.value;
    setUsers(temp);
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form className="form">
        {users.map((user, index) => {
          return (
            <div className="form-container">
              <input
                type="text"
                value={user.firstName}
                placeholder="firstName"
                onChange={(e) => {
                  handleFirstNameChange(e, index);
                }}
                required
              />
              <input
                type="text"
                value={user.lastName}
                placeholder="lastName"
                onChange={(e) => handleLastNameChange(e, index)}
                required
              />
              <input
                type="text"
                value={user.email}
                placeholder="email"
                onChange={(e) => handleEmailChange(e, index)}
                required
              />
              <input
                type="password"
                value={user.password}
                placeholder="password"
                onChange={(e) => handlePasswordChange(e, index)}
                required
              />
              <button className="btn" onClick={(e) => handleRemove(e, index)}>
                Remove
              </button>
            </div>
          );
        })}
      </form>
      <button className="btn" onClick={handleAdd}>
        Add More
      </button>
      <button
        className="btn submitBtn"
        onClick={() => {
          setShowData(true);
        }}
        type="submit"
      >
        Submit
      </button>
      {showData && (
        <div className="data-contain">
          <h3>Data Entered</h3>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <div className="data">
                  <h4>firstName: {user.firstName}</h4>
                  <h4>lastName: {user.lastName}</h4>
                  <h4>Email: {user.email}</h4>
                  <h4>Password: {user.password}</h4>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
