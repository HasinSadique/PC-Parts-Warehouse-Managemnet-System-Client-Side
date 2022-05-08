import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-management-site.herokuapp.com/getItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-center text-white text-4xl mt-5 underline font-semibold font-serif">
        Inventory
      </h1>
      <small className="text-white block mt-3 text-center ">
        Total items: {items.length}
      </small>

      <div className="p-20 grid lg:grid-cols-2 grid-cols-1 gap-20 mx-auto">
        {items.map((item) => (
          <ItemCard className="" key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
