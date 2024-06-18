import { useState } from "react";
import "./App.css";
import AuthForm from "./components/AuthForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsLogin(true); // Optional: Reset to login form on logout
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <h1>Hello, {loggedInUser.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <AuthForm isLogin={isLogin} onLogin={handleLogin} />
          <button onClick={toggleForm}>{isLogin ? "Go to Register" : "Go to Login"}</button>
        </div>
      )}
    </div>
  );
}

export default App;
