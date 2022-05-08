import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const ItemCard = ({ item }) => {
    const {
        _id,
        imageUrl,
        itemName,
        supplierName,
        itemPrice,
        description,
        quantity,
    } = item;
    // console.log("StockID:>>> ", _id);
    let showDeleteBtn = false;
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname == "/inventory") {
        showDeleteBtn = true;
    }

    const navigateToManageStock = (id) => {
        navigate(`/getItems/${id}`);
    };

    const handleDeleteItem = async(event) => {
        if (window.confirm("Are you sure You want to delete this item?")) {
            console.log("Yes Delete.");

            fetch(
                    `https://warehouse-management-site.herokuapp.com/delete-item/${_id}`, {
                        method: "DELETE",
                    }
                )
                .then((res) => res.json())
                .then((data) => {
                    if (data.Status == 200) {
                        //navigate to Inventory List
                        window.location.reload(true);
                    }
                });
        } else {
            console.log("Don't Delete");
        }
    };

    return ( <
        div className = "p-3 lg:flex bg-slate-200 rounded-3xl" >
        <
        img className = "lg:w-1/3 w-1/2 lg:h-1/2 lg:my-auto mb-5 rounded-3xl mx-auto"
        src = { imageUrl }
        alt = "" /
        >
        <
        div className = "lg:pl-5" >
        <
        h1 className = "font-semibold mt-2   " > { itemName } < /h1> <
        h5 className = "text-sm " > Supplier: { supplierName } < /h5> <
        h6 className = "mt-7 font-semibold" > Key Features < /h6> <
        h5 className = "text-justify" > { description } < /h5> <
        h1 className = "text-3xl font-bold mt-5" >
        Price: { itemPrice } < span className = "font-bold" > ৳ < /span> <
        /h1> <
        h1 className = "font-bold text-xl mb-5" >
        Quantity: { quantity }
        pieces in stock. <
        /h1> <
        div className = "grid grid-cols-2 gap-2" >
        <
        button onClick = {
            () => navigateToManageStock(_id) }
        className = { `${
              user
                ? "bg-red-600 hover:bg-red-800 text-white font-bold rounded w-full mb-5 py-2 px-5"
                : "hidden "
            }` } >
        Manage Stock <
        /button> <
        button onClick = { handleDeleteItem }
        className = { `${
              user
                ? "bg-red-600 hover:bg-red-800 text-white font-bold rounded w-full mb-5 py-2 px-5"
                : "hidden "
            } ${showDeleteBtn ? "" : "hidden"} ` } >
        Delete item <
        /button> <
        /div> <
        /div> <
        /div>
    );
};

export default ItemCard;