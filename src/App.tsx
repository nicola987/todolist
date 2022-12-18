import React, { useState } from "react";
import { StyledInput, StyledField, StyledPassInput, StyledPassField,StyledNameField, StyledNameInput } from "./App.styled";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div style={{ margin: "50px" }}>


      <StyledInput
        placeholder="Please write your login..."
        onChange={(e) => setLogin(e.target.value)}
      />
      <StyledField>Login: {login}</StyledField>

      <StyledPassInput
        placeholder="Please write your password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledPassField>Password: {password}</StyledPassField>

      <StyledNameInput
        type="name"
        placeholder="Please write your name..."
        onChange={(e) => setName(e.target.value)}
      />
      <StyledNameField>Name: {name}</StyledNameField>
    </div>
  );
}

export default App;
