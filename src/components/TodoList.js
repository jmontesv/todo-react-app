import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <div className="todo-list">
      {!todos.length && <h1>¡Enhorabuena! No te queda ninguna tara por hacer</h1>}
      <ul className="todo-list__items">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
