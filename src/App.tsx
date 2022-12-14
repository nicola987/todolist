import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  return (
    <div style={{ margin: "50px" }}>
      <input
        placeholder="Please write your login..."
        onChange={(e) => setLogin(e.target.value)}
      />
      <p>Login: {login}</p>
    </div>
  );
}

export default App;
