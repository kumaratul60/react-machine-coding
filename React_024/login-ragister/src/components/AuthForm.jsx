import React, { useState } from "react";

const AuthForm = ({ isLogin, onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Save a user with their email as the key in localStorage
  const saveUser = (user) => {
    localStorage.setItem(user?.email, JSON.stringify(user));
  };

  // Retrieve a user from localStorage based on their email
  const getUser = (email) => {
    localStorage.getItem(email);
    const user = localStorage.getItem(email);
    return user ? JSON.parse(user) : null;
  };

  const handleSubmit = () => {
    // Validate name is not just whitespace (for registration)
    if (!isLogin && !name.trim()) {
      alert("Name cannot be empty or whitespace.");
      return;
    }

    // Validate email contains '@'
    if (!email.includes("@")) {
      alert('Invalid email address. Please include "@" in the email.');
      return;
    }

    const user = getUser(email);

    if (isLogin) {
      // Login flow
      if (user && user.password === password) { 
        alert("Login successful!");
        console.log({ user });
        onLogin(user); // Pass the logged-in user to the parent component
      } else {
        alert("Invalid email or password");
      }
    } else {
      // Registration flow
      if (user) {
        alert("User already exists!");
      } else {
        const newUser = { name, email, password };
        saveUser(newUser);
        alert("Registration successful!");
        onLogin(newUser); // Automatically log in the user after registration
      }
    }
  };

  return (
    <div>
      <p>{isLogin ? "Login form" : "Register form"}</p>
      {!isLogin && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>{isLogin ? "Login" : "Register"}</button>
    </div>
  );
};

export default AuthForm;
