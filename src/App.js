import "./App.css";
import ContextTodos from "./context/TodosContext";
import ContextPortal from "./context/PortalContext";
import Todos from "./components/Todos";

function App() {
  return (
    <ContextPortal>
      <div className="App">
        <ContextTodos>
          <main>
            <Todos />
          </main>
        </ContextTodos>
      </div>
    </ContextPortal>
  );
}

export default App;
