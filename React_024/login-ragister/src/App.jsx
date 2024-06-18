import { useState } from "react";
import "./App.css";
import AuthForm from "./components/AuthForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <AuthForm isLogin={isLogin} />
      <button onClick={toggleForm}>{isLogin ? "Go to ragister" : "Go to login"}</button>
    </div>
  );
}

export default App;
