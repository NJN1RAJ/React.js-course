import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import Todotasks from "./components/Todotasks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer, useState } from "react";
import { TodoItemContext } from "./store/todo-items.-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newtodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newtodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newtodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteNewItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteNewItem }}>
      <center className="todo-container">
        <AppName />
        <TodoItem />
        <Todotasks />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
