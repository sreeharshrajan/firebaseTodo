import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import {
  onSnapshot,
  deleteDoc,
  doc,
  collection,
  query,
  orderBy,
  limit,
  updateDoc,
} from "firebase/firestore";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit, TiTick } from "react-icons/ti";
import { CgTimelapse } from "react-icons/cg";
import {
  ListContainer,
  List,
  Icons,
  Pagination,
  PaginationIconWrapper,
} from "./ToDoListComponents";
import Modal from "./Modal";

const ToDoList = () => {
  const [todos, setTodos] = useState([{ text: "Loading...", id: "initial" }]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const querySnapshot = query(
      collection(db, "toDoApp"),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    onSnapshot(querySnapshot, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const toggleStatus = async (todo) => {
    await updateDoc(doc(db, "toDoApp", todo.id), { complete: !todo.complete });
  };

  const openModal = (id) => {
    setShowModal((prev) => !prev);
    console.log(id);
  };

  const fetchPrevious = () => {};
  const fetchNext = () => {};
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ListContainer>
        {todos.map((todo) => (
          <List key={todo.id} className="todo-row">
            <div style={{ textDecoration: todo.complete && "line-through" }}>
              {todo.text}
            </div>
            <p> {todo.createdAt?.toDate().toDateString()} </p>
            <Icons className="icons">
              <RiCloseCircleLine
                className="delete-icon"
                onClick={() => deleteDoc(doc(db, "toDoApp", todo.id))}
              />
              <TiEdit
                className="edit-icon"
                onClick={() => openModal(todo.id)}
              />
              {todo.complete ? (
                <TiTick
                  className="tick-icon"
                  aria-label="Toggle Status"
                  onClick={() => toggleStatus(todo)}
                />
              ) : (
                <CgTimelapse
                  className="progress-icon"
                  onClick={() => toggleStatus(todo)}
                />
              )}
            </Icons>
          </List>
        ))}
        <Pagination>
          <PaginationIconWrapper>
            <button onClick={fetchPrevious} disabled className="button">
              Previous
            </button>

            <button onClick={fetchNext} disabled className="button">
              Next
            </button>
          </PaginationIconWrapper>
        </Pagination>
      </ListContainer>
    </>
  );
};

export default ToDoList;
