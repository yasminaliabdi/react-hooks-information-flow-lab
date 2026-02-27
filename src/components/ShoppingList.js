import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, selectedCategory: initialCategory = "All", onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    if (onCategoryChange) onCategoryChange(event);  
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;