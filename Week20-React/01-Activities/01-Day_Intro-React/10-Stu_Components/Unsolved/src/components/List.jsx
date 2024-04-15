function List({ groceries }) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {groceries.map((item) => {
        return (
          // TODO: Your code here
          // single iteration is defined as 'item'
          <li className="list-group" key={item.id}>
            {/* template literals */}
            {`${item.name} ${item.name}`}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
