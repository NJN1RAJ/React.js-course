import { useContext } from "react";
import Todotask from "./Todotask";
import { TodoItemContext } from "../store/todo-items.-store";
function Todotasks() {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <Todotask
            todoName={item.name}
            todoDate={item.date}
            key={item.name}
          ></Todotask>
        );
      })}
    </div>
  );
}

export default Todotasks;
