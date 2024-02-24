function TodosReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.payload);
    case "UPDATE":
      return state.map((todo) => (todo.id === action.payload.id ? action.payload : todo));
    case "DELETE":
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case "TOGGLE-DONE":
      return state.map((todo) => {
        return todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo;
      });
    default:
      throw new Error("La acción que intentas no existe");
  }
}
export default TodosReducer;
