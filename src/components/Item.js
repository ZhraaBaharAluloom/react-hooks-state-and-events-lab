import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState(false);

  const handleAddButton = () => {
    setAdd(!add);
  };
  return (
    <li className={add ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddButton}>
        {add ? "Added" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
