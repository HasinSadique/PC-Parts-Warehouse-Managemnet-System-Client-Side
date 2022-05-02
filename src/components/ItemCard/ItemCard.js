import React from "react";

const ItemCard = (props) => {
  const { imageUrl, itemName, supplierName, itemPrice, description, quantity } =
    props.item;

  // console.log(itemName);
  return (
    <div className="p-3 lg:flex bg-slate-200 rounded-3xl">
      <img
        className="lg:w-1/4 w-3/4 h-1/2 my-auto rounded-3xl mx-auto"
        src={imageUrl}
        alt=""
      />
      <div className="pl-5">
        <h1 className="font-semibold mt-2   ">{itemName}</h1>
        <h5 className="text-sm "> Supplier: {supplierName} </h5>
        <h6 className="mt-7 font-semibold"> Key Features </h6>
        <h5>{description}</h5>
        <h1 className="text-3xl font-bold mt-5">
          Price: {itemPrice} <span className="font-bold"> ৳ </span>
        </h1>
        <h1 className="font-bold text-xl mb-5">
          Quantity: {quantity} pieces in stock.
        </h1>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mb-5 mx-auto rounded">
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
