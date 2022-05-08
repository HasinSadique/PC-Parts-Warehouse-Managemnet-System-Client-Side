import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditDetails = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState({});
  const [response, setResponse] = useState({});
  const [errorResponse, setErrorResponse] = useState({});

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const url = `https://warehouse-management-site.herokuapp.com/getItems/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleUpdateBtnClick = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemPrice: price || item.itemPrice,
        description: description || item.description,
      }),
    };

    const result = await fetch(
      `http://localhost:5000/update-details/${itemId}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => {
        if (err) {
          console.log(errorResponse);
        }
      });

    console.log(result);
    event.target.reset();
  };

  const handlePriceBlur = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionBlur = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="text-white">
      <h1 className="text-center text-white font-serif font-semibold text-3xl mt-5">
        Update Details{" "}
      </h1>
      <div>
        <form
          onClick={handleUpdateBtnClick}
          className="grid grid-cols-1 lg:w-1/2 mx-10 lg:mx-auto bg-slate-700 p-10 mt-5 mb-10 rounded-2xl"
        >
          {response ? <h1>Hello</h1> : <h1>gello</h1>}
          <small className="mb-6 mt-3 text-center">ID: {itemId}</small>
          <label className="text-xl font-semibold mb-1" htmlFor="">
            Item Name
          </label>
          <input
            className="text-black rounded-lg mb-5 lg:p-2 p-1"
            type="text"
            placeholder={item.itemName}
            readOnly
          />
          <label className="text-xl font-semibold mb-1" htmlFor="">
            Price
          </label>
          <input
            onBlur={handlePriceBlur}
            className="text-black pl-2 rounded-lg mb-5 lg:p-2 p-1"
            type="text"
            placeholder={item.itemPrice}
          />
          <label className="text-xl font-semibold mb-1" htmlFor="">
            Description
          </label>
          <textarea
            onBlur={handleDescriptionBlur}
            className="text-black pl-2 rounded-lg"
            rows="3"
            placeholder={item.description}
            type="text"
          />

          <input
            className="bg-orange-600 w-1/4 mx-auto mt-5 py-1 font font-semibold"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
