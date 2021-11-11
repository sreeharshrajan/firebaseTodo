import React, { useState } from "react";
import styled from "styled-components";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import db from "../firebaseConfig";

const TDForm = styled.form`
  margin: 1rem;
  text-align: center;
`;

const TDInput = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 15px 0 0 15px;
  border: 2px solid #fff;
  outline: none;
  min-width: 70%;
  color: #000;
  @media screen and (max-width: 980px) {
    width: 240px;
  }
  ::placeholder {
    color: #727272;
  }
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  outline: none;
  background: #fff;
  color: #000;
  text-transform: capitalize;
  font-weight: 600;
  @media screen and (max-width: 980px) {
    width: 80px;
  }
  &:hover {
    color: #f50;
  }
`;

const ToDoForm = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = async (event) => {
    event.preventDefault();
    if (input) {
      const docRef = await addDoc(collection(db, "toDoApp"), {
        text: input,
        complete: false,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } else {
      alert("Please enter a task");
    }

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <TDForm onSubmit={handleAddTodo}>
      <TDInput
        type="text"
        placeholder="Add New Task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        name="text"
      />
      <Button type="submit">ADD</Button>
    </TDForm>
  );
};

export default ToDoForm;
