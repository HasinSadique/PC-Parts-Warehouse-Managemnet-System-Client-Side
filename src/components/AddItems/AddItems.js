import React, { useState } from "react";
import "./AddItems.css";

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

    const handleSubmit = async(event) => {
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

        await fetch(
                "https://warehouse-management-site.herokuapp.com/add-item",
                requestOptions
            )
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

    return ( <
        div >
        <
        div id = "add-item-form"
        className = "lg:flex rounded-3xl bg-slate-600 m-10 lg:p-10" >
        <
        div className = "flex-none lg:my-auto" >
        <
        img id = "ItemImage"
        className = "rounded-3xl lg:w-3/4 w-5/6"
        src = { imageUrl }
        alt = "" /
        >
        <
        /div>{" "} <
        div className = { `my-auto grow ${imageUrl ? "" : ""}` } >
        <
        form onSubmit = { handleSubmit }
        className = "rounded-3xl bg-slate-700 w-full py-10" >
        <
        h1 className = "mb-8 text-center text-2xl font-medium text-white" >
        Add an item { " " } <
        /h1>{" "} <
        input className = "block mx-auto mb-3 pl-2 w-5/6"
        type = "text"
        onBlur = { handleItemImageUrlBlur }
        placeholder = "Set Image url" /
        >
        <
        input className = "block mx-auto mb-3 pl-2 w-5/6"
        type = "text"
        onBlur = { handleItemNameBlur }
        placeholder = "Item Name" /
        >
        <
        input className = "block mx-auto mb-3 pl-2 w-5/6"
        onBlur = { handleSupplierNameBlur }
        type = "text"
        placeholder = "Supplier Name" /
        >
        <
        input className = "block mx-auto mb-3 pl-2 w-5/6"
        type = "text"
        onBlur = { handleItemPriceUrlBlur }
        placeholder = "Item Price" /
        >
        <
        textarea rows = "4"
        className = "block mx-auto mb-5 pl-2 w-5/6"
        type = "text"
        onBlur = { handleDescriptionBlur }
        placeholder = "Item Description" /
        >
        <
        input className = " block mx-auto bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded "
        type = "submit"
        value = "Add Item" /
        >
        <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default AddItems;