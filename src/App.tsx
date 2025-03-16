import { useState } from "react";

const App = () => {
  const savedItems = localStorage.getItem("items");
  const initialItems = savedItems ? JSON.parse(savedItems) : [1, 2, 3];
  const [items, setItems] = useState<number[]>(initialItems);

  const addItem = () => {
    const nextItem = items.length > 0 ? items[items.length - 1] + 1 : 1;

    setItems((prevItem) => {
      const newItems = [...prevItem, nextItem];
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeItem = (itemToRemove: number) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item !== itemToRemove);
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>
            Item: {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
