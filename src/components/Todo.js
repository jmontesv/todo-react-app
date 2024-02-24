import React, { useContext } from "react";
import { PortalContext } from "../context/PortalContext";
import { TodosContext } from "../context/TodosContext";
import Modal from "../elements/Modal";
import EditTodo from "./EditTodo";
import Button from "../elements/Button";

const buttonsName = {
  REMOVE: "Eliminar",
  EDIT: "Editar",
  ENDUP: "Terminar",
  UNDO: "Deshacer",
};

function Todo(props) {
  const { deleteTodo, toggleDoneTodo } = useContext(TodosContext);
  const { setStatePortal } = useContext(PortalContext);
  const handleUpdate = () => {
    const componentToEdit = () => (
      <Modal>
        <EditTodo {...props}></EditTodo>
      </Modal>
    );
    setStatePortal({ isOpen: true, content: componentToEdit() });
  };
  const handleClick = (e) => {
    const type = e.target.textContent;
    if (type === buttonsName.REMOVE) return deleteTodo(props.id);
    if (type === buttonsName.EDIT) return handleUpdate();
    if (type === buttonsName.ENDUP || buttonsName.UNDO)
      return toggleDoneTodo(props.id, !props.done);
  };
  let classNameTitle = "todo__title";
  if (props.important) classNameTitle += " todo__title--bold";
  return (
    <li className="todo">
      <h2 className={classNameTitle}>
        {props.done ? <del>{props.description}</del> : <>{props.description}</>}
      </h2>
      <div className="todo__body">
        <Button onClick={handleClick}>{buttonsName.REMOVE}</Button>
        <Button onClick={handleClick}>{buttonsName.EDIT}</Button>
        <Button onClick={handleClick}>{props.done ? buttonsName.UNDO : buttonsName.ENDUP}</Button>
      </div>
    </li>
  );
}

export default Todo;
