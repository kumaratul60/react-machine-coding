/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import "./App.css";
import { items } from "./nestedData";
import NestedDropdown from "./nestedDropdown";

function App() {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleSelect = (item: any) => {
    setSelectedItem(item.title);
    setDropdownVisible(false);
  };

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <h1>Nested Dropdown Example</h1>
      <input
        type="text"
        value={selectedItem}
        readOnly
        placeholder="Select an item"
        onClick={toggleDropdown}
      />
      {dropdownVisible && (
        <NestedDropdown
          items={items}
          onSelect={handleSelect}
          openItems={openItems}
          toggleItem={toggleItem}
        />
      )}
    </div>
  );
}

export default App;
