import React, { useReducer } from "react";
import TodosReducer from "../reducers/TodosReducer";

export const TodosContext = React.createContext();

const initialState = [
  { id: 1, description: "Hacer la compra", important: true, done: false },
  { id: 2, description: "Pasear al perro", important: false, done: true },
];
function ContextTodos({ children }) {
  const [todos, dispatch] = useReducer(TodosReducer, initialState);

  const createTodo = (newTodo) => {
    dispatch({ type: "CREATE", payload: newTodo });
  };
  const deleteTodo = (todoId) => {
    dispatch({ type: "DELETE", payload: { id: todoId } });
  };
  const toggleDoneTodo = (todoId, value) => {
    dispatch({ type: "TOGGLE-DONE", payload: { id: todoId, done: value } });
  };
  const updateTodo = (newTodo) => {
    dispatch({ type: "UPDATE", payload: newTodo });
  };
  const exposedData = {
    createTodo,
    deleteTodo,
    toggleDoneTodo,
    updateTodo,
    todos,
  };

  return <TodosContext.Provider value={exposedData}>{children}</TodosContext.Provider>;
}
export default ContextTodos;
