import React, { useContext, useState } from "react";
import TextInput from "../elements/TextInput";
import CheckInput from "../elements/CheckInput";
import FormControl from "../elements/FormControl";
import Button from "../elements/Button";
import { TodosContext } from "../context/TodosContext";
import { PortalContext } from "../context/PortalContext";

function EditTodo({ description, important, done, id }) {
  const { updateTodo } = useContext(TodosContext);
  const { setStatePortal } = useContext(PortalContext);
  const [form, setForm] = useState(() => {
    return {
      id,
      description,
      important,
      done,
    };
  });
  const handleInput = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prevForm) => {
      return { ...prevForm, [e.target.name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(form);
    setStatePortal((prev) => {
      return { ...prev, isOpen: false };
    });
  };
  return (
    <form className="form-edit-todo" onSubmit={handleSubmit}>
      <div className="form-new-todo__group">
        <FormControl direction="vertical">
          <TextInput
            name="description"
            value={form.description}
            onChange={handleInput}
            label="*Descripcion"
          ></TextInput>
        </FormControl>
        <FormControl align="center">
          <CheckInput
            label="*Importante"
            name="important"
            onChange={handleInput}
            isCheck={form.important}
          ></CheckInput>
        </FormControl>
      </div>
      <Button>ACTUALIZAR</Button>
    </form>
  );
}

export default EditTodo;
