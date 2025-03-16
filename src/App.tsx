import { useState } from "react";

const App = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const addItem = () => {
    const nextItem = items.length > 0 ? items[items.length - 1] + 1 : 1;
    setItems((prevItem) => [...prevItem, nextItem]);
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
