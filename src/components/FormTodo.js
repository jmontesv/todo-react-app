import React, { useContext } from "react";
import { useState } from "react";
import { TodosContext } from "../context/TodosContext";
import Button from "../elements/Button";
import CheckInput from "../elements/CheckInput";
import FormControl from "../elements/FormControl";
import TextInput from "../elements/TextInput";
import "../FormTodo.css";

let initialState = {
  description: "",
  important: true,
  done: false,
};

function FormTodo() {
  const [form, setForm] = useState(initialState);
  const { createTodo } = useContext(TodosContext);

  const handleInput = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prevForm) => {
      return { ...prevForm, [e.target.name]: value };
    });
  };
  // TODO: Validar el formulario
  const handleSubmit = (e) => {
    const newTodo = { id: new Date().getUTCMilliseconds(), ...form };
    createTodo(newTodo);
    e.preventDefault();
  };

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <div className="form-new-todo__group">
        <FormControl direction="vertical">
          <TextInput
            direction="vertical"
            placeHolder="Introduce la terea"
            name={"description"}
            onChange={handleInput}
            label={"Descripcion"}
          ></TextInput>
        </FormControl>
        <FormControl align="center">
          <CheckInput
            isCheck={form.important}
            name="important"
            label="Important"
            onChange={handleInput}
          ></CheckInput>
        </FormControl>
      </div>
      <Button>CREAR</Button>
    </form>
  );
}

export default FormTodo;
