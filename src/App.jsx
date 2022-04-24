import "./app.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="title">
          <h2>Your TODO list</h2>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
