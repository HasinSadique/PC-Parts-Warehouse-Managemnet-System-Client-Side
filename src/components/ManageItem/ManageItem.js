import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
const ManageItem = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/getItems/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div className="">
      <div className="text-white w-1/2 mx-auto">
        <div className="flex justify-center">
          <img
            className="lg:w-1/3 w-1/2 rounded-2xl "
            src={item.imageUrl}
            alt=""
          />
          <div className=" ml-5">
            <h1 className="mt-10 font-semibold text-xl">{item.itemName}</h1>
            <small>supplier: {item.supplierName}</small>

            {/* Inventory Item manage buttons */}
            <div className="py-5">
              <a className="flex justify-center bg-orange-400 w-1/3 px-2 py-1 mb-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Edit details
              </a>
              <a className="flex justify-center bg-orange-400 w-1/3 px-2 py-1 mb-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete Item
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <big className="font-semibold">Description:</big>
          <br />
          <p className="text-justify">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
