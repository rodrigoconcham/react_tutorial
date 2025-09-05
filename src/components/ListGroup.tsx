function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];

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
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
