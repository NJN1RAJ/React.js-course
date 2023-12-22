import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items.-store";

function Todotask({ todoName, todoDate }) {
  const { deleteNewItem } = useContext(TodoItemContext);

  return (
    <div className="container ">
      <div className="row nj-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger nj-button"
            onClick={() => deleteNewItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todotask;
