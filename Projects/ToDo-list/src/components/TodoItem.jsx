import { useState } from "react";

function TodoItem({ onNewItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleDateChange = (event) => {
    setDate(event.target.value);
  };

  let handleAddButtonClicked = () => {
    onNewItem(name, date);
    setDate("");
    setName("");
  };

  return (
    <div className="container text-center">
      <div className="row nj-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter your task"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={date} />
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
