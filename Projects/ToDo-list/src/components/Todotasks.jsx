import Todotask from "./Todotask";
function Todotasks({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <Todotask
            todoName={item.name}
            todoDate={item.date}
            key={item.name}
            onDeleteClick={onDeleteClick}
          ></Todotask>
        );
      })}
    </div>
  );
}

export default Todotasks;
