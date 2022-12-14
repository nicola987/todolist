import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("")
  return (
    <div style={{ margin: "50px" }}>
      <input
        placeholder="Please write your login..."
        onChange={(e) => setLogin(e.target.value)}
      />
      <p>Login: {login}</p>

      <input
      placeholder="Please write your password..."
      onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password: {password}</p>
    </div>
  );
}

export default App;
