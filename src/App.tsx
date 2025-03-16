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
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => removeItem(3)}>Remove Item 3</button>
      <ul>
        {items.map((item) => (
          <li key={item}>Item: {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
