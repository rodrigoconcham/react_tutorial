function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found.</p>
      </>
    );

  const message = items.length === 0 ? <p>No items found.</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
