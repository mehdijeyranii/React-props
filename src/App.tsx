import { useState } from "react";

const App = () => {
  const savedItems = localStorage.getItem("items");
  const initialItems = savedItems ? JSON.parse(savedItems) : [];
  const [items, setItems] = useState<number[]>(initialItems);

  const addItem = () => {
    const nextItem = items.length > 0 ? items[items.length - 1] + 1 : 1;
    
    setItems((prevItem) => {
      const newItems = [...prevItem, nextItem];
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>Item: {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
