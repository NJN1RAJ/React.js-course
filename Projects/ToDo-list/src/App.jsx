import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import Todotasks from "./components/Todotasks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleItem = (itemName, itemDate) => {
    setTodoItems([...todoItems, { name: itemName, date: itemDate }]);
  };

  const handleDelete = (todoName) => {
    const newtodoItems = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newtodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <TodoItem onNewItem={handleItem} />
      {todoItems.length === 0 && <WelcomeMsg />}
      <Todotasks todoItems={todoItems} onDeleteClick={handleDelete} />
    </center>
  );
}

export default App;
