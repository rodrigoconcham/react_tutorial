import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;
  //items = [];

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found 1</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found 2</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={() => setSelectedIndex(index)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
