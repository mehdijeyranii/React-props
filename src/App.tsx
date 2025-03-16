import { useState } from "react";

const App = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const addItem = () => {
    setItems((prevItem) => [...prevItem, 4]);
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
