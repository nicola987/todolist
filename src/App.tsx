import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div style={{ margin: "50px" }}>
      <input
        placeholder="Please write your login..."
        onChange={(e) => setLogin(e.target.value)}
      />
      <p>Login: {login}</p>

      <input
        type="password"
        placeholder="Please write your password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password: {password}</p>

      <input
        type="name"
        placeholder="Please write your name..."
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
