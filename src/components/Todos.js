import React, { useContext } from "react";
import { PortalContext } from "../context/PortalContext";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import Portal from "./Portal";

function Todos() {
  const { statePortal } = useContext(PortalContext);
  return (
    <>
      <TodoList />
      <FormTodo />
      <Portal>{statePortal.content}</Portal>
    </>
  );
}

export default Todos;
