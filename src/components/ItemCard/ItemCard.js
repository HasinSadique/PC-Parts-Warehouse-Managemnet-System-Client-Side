import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router";
import auth from "../../firebase.init";

const ItemCard = (props) => {
  const { imageUrl, itemName, supplierName, itemPrice, description, quantity } =
    props.item;
  let showDeleteBtn = false;
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (location.pathname == "/inventory") {
    showDeleteBtn = true;
  }

  console.log("Location:>>> ", location);
  return (
    <div className="p-3 lg:flex bg-slate-200 rounded-3xl">
      <img
        className="lg:w-1/3 w-1/2 lg:h-1/2 lg:my-auto mb-5 rounded-3xl mx-auto"
        src={imageUrl}
        alt=""
      />
      <div className="pl-5">
        <h1 className="font-semibold mt-2   "> {itemName} </h1>
        <h5 className="text-sm "> Supplier: {supplierName} </h5>
        <h6 className="mt-7 font-semibold"> Key Features </h6>
        <h5> {description} </h5>
        <h1 className="text-3xl font-bold mt-5">
          Price: {itemPrice} <span className="font-bold"> ৳ </span>
        </h1>
        <h1 className="font-bold text-xl mb-5">
          Quantity: {quantity} pieces in stock.
        </h1>
        <button
          className={`${
            user
              ? "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mb-5 mx-auto rounded"
              : "hidden "
          }`}
        >
          Update Stock
        </button>
        <button
          className={`${
            user
              ? "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mb-5 ml-5 mx-auto rounded"
              : "hidden "
          } ${showDeleteBtn ? "" : "hidden"} `}
        >
          Delete item
        </button>
        <a
          className={`${
            user
              ? " hover:text-blue-600 text-blue-400 font-bold lg:ml-3"
              : "hidden "
          } ${showDeleteBtn ? "" : "hidden"} `}
          href=""
        >
          Edit item
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
