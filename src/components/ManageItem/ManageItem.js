import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
const ManageItem = () => {
  const { itemId } = useParams();
  let isEmpty = false;

  const [item, setItem] = useState({});
  if (item.quantity == 0) {
    isEmpty = true;
  }

  useEffect(() => {
    const url = `https://pc-warehouse-management-site.web.app/getItems/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div className="">
      <div className="text-white lg:w-1/2 mx-auto bg-slate-700 lg:rounded-3xl lg:my-10 p-10">
        <div className="flex justify-center">
          <img
            className="lg:w-1/3 w-1/2 rounded-2xl lg:my-0 my-10 "
            src={item.imageUrl}
            alt=""
          />
          <div className=" ml-5">
            <h1 className=" font-semibold text-xl">{item.itemName}</h1>
            <small className="block mt-2">
              <span className="font-semibold text-base">Item ID: </span>
              {item._id}
            </small>
            <small>supplier: {item.supplierName}</small>
            <h1 className="mt-5 text-2xl">
              Price: {item.itemPrice}
              <span className="text-3xl">৳</span>
            </h1>
            <div className="lg:flex justify-between mt-3">
              <h1 className="text-xl lg:mb-0 mb-2">
                Quantity: {item.quantity}{" "}
                <span className="text-red-500">left</span>
                <small
                  className={`${
                    isEmpty
                      ? "block  text-center bg-red-700 border-red-700"
                      : "hidden"
                  }`}
                >
                  Out-of-Stock
                </small>
              </h1>
              <a className=" cursor-pointer hover:bg-orange-600 border-2 rounded-xl mr-5 my-auto px-3">
                Re-stock Item
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <big className="font-semibold">Description:</big>
          <br />
          <p className="text-justify">{item.description}</p>
          {/* Inventory Item manage buttons */}
          <div className="flex justify-around mt-10 py-5">
            <a className="cursor-pointer flex justify-center text-black font-bold bg-orange-400 hover:bg-orange-500 w-1/3 px-2 py-1 mb-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              Edit details
            </a>
            <a className="cursor-pointer flex justify-center text-black font-bold bg-orange-400 hover:bg-orange-500 w-1/3 px-2 py-1 mb-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete Item
            </a>
          </div>
          <a className="cursor-pointer flex justify-center text-black font-bold text-2xl bg-orange-400 hover:bg-orange-500 w-full px-2 py-1 mb-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            Delivered
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
