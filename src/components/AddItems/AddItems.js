import React, { useState } from "react";

const AddItems = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [itemName, setItemName] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");

  const handleItemImageUrlBlur = (event) => {
    setImageUrl(event.target.value);
  };
  const handleItemNameBlur = (event) => {
    setItemName(event.target.value);
  };
  const handleSupplierNameBlur = (event) => {
    setSupplierName(event.target.value);
  };
  const handleItemPriceUrlBlur = (event) => {
    setItemPrice(event.target.value);
  };
  const handleDescriptionBlur = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(itemName);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: imageUrl,
        itemName: itemName,
        supplierName: supplierName,
        itemPrice: itemPrice,
        description: description,
      }),
    };

    await fetch("http://localhost:5000/add-item", requestOptions)
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => {
        if (err) {
          console.log(response);
        }
      });

    console.log(response);
    event.target.reset();
  };

  return (
    <div className="lg:flex ">
      <div className="my-auto ">
        <img
          className="lg:w-3/4 w-1/2 mt-10 ml-auto rounded-xl"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className=" w-1/2 mx-auto">
        <h1 className="text-center text-2xl font-medium text-white my-10">
          Add an item
        </h1>
        <form onSubmit={handleSubmit} className=" lg:w-3/4 ">
          <input
            className="block mx-auto mb-5 pl-2 w-3/4"
            type="text"
            onBlur={handleItemImageUrlBlur}
            placeholder="Set Image url"
          />
          <input
            className="block mx-auto mb-5 pl-2 w-3/4"
            type="text"
            onBlur={handleItemNameBlur}
            placeholder="Item Name"
          />
          <input
            className="block mx-auto mb-5 pl-2 w-3/4"
            onBlur={handleSupplierNameBlur}
            type="text"
            placeholder="Supplier Name"
          />
          <input
            className="block mx-auto mb-5 pl-2 w-3/4"
            type="text"
            onBlur={handleItemPriceUrlBlur}
            placeholder="Item Price"
          />
          <input
            className="block mx-auto mb-5 pl-2 w-3/4"
            type="text"
            onBlur={handleDescriptionBlur}
            placeholder="Item Description"
          />
          <input
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mb-20 w-32 rounded mx-24"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
