import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div>
        <img
          className=" w-full my-5"
          src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300130/73802267-computerladen-verschiedene-computerteile-sind-auf-dem-tisch-web-flat-vektor-banner-.jpg?fj=1"
          alt=""
        />
      </div>
      {/* Inventory Items */}
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1 lg:my-40 my-20 lg:mx-20 mx-10">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
    </div>
  );
};

export default Home;
