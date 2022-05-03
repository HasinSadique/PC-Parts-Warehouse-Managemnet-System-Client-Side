import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="p-20 grid lg:grid-cols-2 grid-cols-1 gap-20 mx-auto">
      {items.map((item) => (
        <ItemCard className="" key={item._id} item={item}></ItemCard>
      ))}
    </div>
  );
};

export default InventoryList;
