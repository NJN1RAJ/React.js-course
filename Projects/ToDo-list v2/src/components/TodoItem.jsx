import { useRef, useContext } from "react";
import { TodoItemContext } from "../store/todo-items.-store";

function TodoItem() {
  const name = useRef();
  const date = useRef();

  const { addNewItem } = useContext(TodoItemContext);

  let handleAddButtonClicked = () => {
    const todoName = name.current.value;
    const todoDate = date.current.value;
    addNewItem(todoName, todoDate);
    name.current.value = "";
    date.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row nj-row">
        <div className="col-4">
          <input type="text" placeholder="Enter your task" ref={name} />
        </div>
        <div className="col-4">
          <input type="date" ref={date} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success nj-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
