import React, { useEffect, useState } from "react";
import InventoryList from ".././InventoryList/InventoryList";

import { useNavigate, useParams } from "react-router-dom";
const ManageItem = () => {
  const { itemId } = useParams();
  let isEmpty = false;
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [stockQuantity, setStockQuantity] = useState(0);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const url = `https://warehouse-management-site.herokuapp.com/getItems/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  useEffect(() => {
    const url = `https://warehouse-management-site.herokuapp.com/getItems/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStockQuantity(data.quantity));
  }, []);

  const {
    _id,
    imageUrl,
    quantity,
    itemName,
    supplierName,
    itemPrice,
    description,
  } = item;

  const handleDeliveredClick = async (event) => {
    event.preventDefault();
    const num = stockQuantity - 1;
    setStockQuantity(num);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: num,
      }),
    };

    await fetch(
      `https://warehouse-management-site.herokuapp.com/updateStock/${itemId}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => {
        if (err) {
          console.log("Error: ", response);
        }
      });
  };

  const handleDeleteItem = async (event) => {
    event.preventDefault();

    if (window.confirm("Are you sure You want to delete this item?")) {
      console.log("Yes Delete.");

      fetch(
        `https://warehouse-management-site.herokuapp.com/delete-item/${itemId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.Status == 200) {
            //navigate to Inventory List
            navigate(`/inventory`);
          }
        });
    } else {
      console.log("Don't Delete");
    }
  };

  const handleReStockClick = async (event) => {
    event.preventDefault();
    let value = parseInt(
      prompt("How many quantities do you want to re-stock?")
    );
    const num = stockQuantity + value;
    setStockQuantity(num);

    console.log("new stock: ", num);
    // console.log(itemName);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: num,
      }),
    };

    await fetch(
      `https://warehouse-management-site.herokuapp.com/updateStock/${itemId}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => {
        if (err) {
          console.log("Error: ", response);
        }
      });

    // console.log("Result: ", response.result.acknowledged);
  };

  if (stockQuantity == 0) {
    isEmpty = true;
  }
  return (
    <div className="">
      {/* Toast Success */}
      {response?.result?.acknowledged ? (
        <div
          id="toast-success"
          className="mx-auto flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">Re-stock successfully.</div>
          <button
            onClick={() => {
              setResponse(null);
            }}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 
            hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 
            p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500
            dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <div
        className="text-white lg:w-1/2 mx-auto 
      bg-slate-700 lg:rounded-3xl lg:my-10 p-10"
      >
        <div className="flex justify-center">
          <img
            className="lg:w-1/3 w-1/2 rounded-2xl lg:my-0 my-10 "
            src={imageUrl}
            alt=""
          />
          <div className=" ml-5">
            <h1 className=" font-semibold text-xl">{itemName}</h1>
            <small className="block mt-2">
              <span className="font-semibold text-base">Item ID: </span>
              {_id}
            </small>
            <small>supplier: {supplierName}</small>
            <h1 className="mt-5 text-2xl">
              Price: {itemPrice}
              <span className="text-3xl">৳</span>
            </h1>
            <div className="grid lg:grid-cols-2 lg:gap-10 justify-between mt-3">
              <h1 className="text-xl lg:mb-0 mb-2">
                {stockQuantity}{" "}
                <span className="text-red-500"> items left in stock.</span>
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
              <a
                onClick={handleReStockClick}
                className=" text-center w-full cursor-pointer hover:bg-orange-600 border-2 rounded-xl mr-5 my-auto px-3"
              >
                Re-stock Item
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <big className="font-semibold">Description:</big>
          <br />
          <p className="text-justify">{description}</p>
          {/* Inventory Item manage buttons */}
          <div className="flex justify-around mt-10 py-5">
            <a
              href={`/edit-details/${itemId}`}
              className="cursor-pointer flex justify-center text-black font-bold bg-orange-400 hover:bg-orange-500 w-1/3 px-2 py-1 mb-3 rounded-xl"
            >
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
            <a
              onClick={handleDeleteItem}
              className="cursor-pointer flex justify-center text-black font-bold bg-orange-400 hover:bg-orange-500 w-1/3 px-2 py-1 mb-3 rounded-xl"
            >
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
          <a
            onClick={handleDeliveredClick}
            className="cursor-pointer flex justify-center text-black font-bold text-2xl bg-orange-400 hover:bg-orange-500 w-full px-2 py-1 mb-3 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
