import { useState } from "react";

const App = () => {
  const savedItems = localStorage.getItem("items");
  const initialItems = savedItems ? JSON.parse(savedItems) : [1, 2, 3];
  const [items, setItems] = useState<number[]>(initialItems);
  const [newItemValues, setNewItemValues] = useState<{ [key: number]: number }>(
    {}
  );

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

  const updateItem = (oldItem: number) => {
    const newItem = newItemValues[oldItem];
    if (newItem === undefined || newItem === 0) return;

    setItems((prevItems) => {
      const updateItem = prevItems.map((item) =>
        item === oldItem ? newItem : item
      );
      localStorage.setItem("items", JSON.stringify(updateItem));
      return updateItem;
    });
  };

  const handleInputChange = (item: number, value: number) => {
    setNewItemValues((prevState) => ({
      ...prevState,
      [item]: value,
    }));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>
            Item: {item}
            <button onClick={() => removeItem(item)}>Remove</button>
            <div>
              <input
                type="number"
                value={newItemValues[item]}
                onChange={(e) =>
                  handleInputChange(item, Number(e.target.value))
                }
                placeholder="Enter new item value"
              />
              <button onClick={() => updateItem(item)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
