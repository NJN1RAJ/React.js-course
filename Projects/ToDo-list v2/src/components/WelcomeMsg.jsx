import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items.-store";

function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemContext);
  return todoItems.length === 0 && <h3>You have no tasks!</h3>;
}

export default WelcomeMsg;
