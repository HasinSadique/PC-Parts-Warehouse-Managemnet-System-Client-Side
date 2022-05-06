import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-management-site.herokuapp.com/getItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // console.log(items);

  return (
    <div className="">
      {/* Banner */}
      <div>
        <img
          className=" w-full mb-5"
          src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300130/73802267-computerladen-verschiedene-computerteile-sind-auf-dem-tisch-web-flat-vektor-banner-.jpg?fj=1"
          alt=""
        />
      </div>
      <div>
        {/* Inventory Items */}
        <h3 className="lg:my-32 my-20 text-center text-3xl font-semibold text-white">
          Inventory Items
        </h3>
        <div className="grid lg:grid-cols-2 gap-20 grid-cols-1 lg:mx-20 mx-10 mb-10">
          {items.slice(0, 6).map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      </div>
      <a
        className="text-white font-semibold text-center bg-red-600 border-2 block w-1/2 lg:w-1/4 mx-auto py-1"
        href="/inventory"
      >
        Manage inventory
      </a>
      <hr className="my-10 lg:mx-20 mx-10 border-gray-200 dark:border-gray-700" />
      {/* PC-build Youtube Video */}
      <h3 className="text-center text-3xl font-medium text-white ">
        PC Build Video Tutorial
      </h3>
      <iframe
        className="w-3/4 mx-auto my-10"
        width="914"
        height="514"
        src="https://www.youtube.com/embed/gO-V8E9MIBg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Home;
