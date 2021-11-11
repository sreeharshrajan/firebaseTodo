import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import styled from "styled-components";

const Credits = styled.div`
  color: #abc;
  font-weight: 300;
  text-align: center;
  a {
    font-weight: 500;
    text-decoration: none;
    color: #a5c;
  }
`;

const ToDo = () => {
  return (
    <>
      <ToDoForm />
      <ToDoList />
      <Credits>
        App Created by
        <a href="https://www.github.com/sreeharshrajan"> Sreeharsh Rajan </a>
      </Credits>
    </>
  );
};

export default ToDo;
