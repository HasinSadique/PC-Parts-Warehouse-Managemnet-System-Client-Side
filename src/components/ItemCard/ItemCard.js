import React from "react";

const ItemCard = () => {
  return (
    <div className="p-3 lg:flex bg-slate-200 rounded-3xl">
      <img
        className="lg:w-1/4 w-3/4 h-1/2 my-auto rounded-3xl mx-auto"
        src="https://www.binarylogic.com.bd/images/product_image/mediumi5-12600k-processor-price.webp"
        alt=""
      />
      <div className="pl-5">
        <h1 className="font-semibold mt-2   ">
          Intel 12th Gen Core i5-12600K Alder Lake Processor
        </h1>
        <h5 className="text-sm ">Supplier: Intel</h5>
        <h6 className="mt-7 font-semibold">Key Features</h6>
        <h5>
          <li>Model: Core i5-12600K</li>
          <li>Base Clock: P-Core: 3.7 GHz, E-Core: 2.8 GHz </li>
          <li>Max.Boost: P-Core: 4.9 GHz, E-Core: 3.6 GHz</li>
          <li>Cache: 20MB, Socket: LGA 1700</li>
          <li>CPU Cores: 10, CPU Threads: 16</li>
        </h5>

        <h1 className="text-3xl font-bold mt-5">
          Price: 2500 <span className="font-bold">৳</span>
        </h1>
        <h1 className="font-bold text-xl mb-5">Quantity: 500 Pieces left</h1>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mb-5 mx-auto rounded">
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
