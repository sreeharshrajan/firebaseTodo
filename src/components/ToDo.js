import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import styled from "styled-components";

const Credits = styled.div`
  display: inline-block;
  margin: 0 auto;
  color:#abc;
  font-weight: 300;
`;

const ToDo = () => {
  return (
    <>
      <ToDoForm />
      <ToDoList />
      <Credits>App Created by Sreeharsh Rajan</Credits>
    </>
  );
};

export default ToDo;
