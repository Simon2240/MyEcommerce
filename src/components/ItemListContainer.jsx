import React from 'react'
import { useEffect } from "react";
import {useState} from "react"
import ItemList from "./ItemList"
import {Link} from "react-router-dom";

const ItemListContainer = () => {
    const [products,setProducts]=useState([])
    const getProducts = async ()=>{
        const data = await fetch('https://fakestoreapi.com/products')
        const resp = await data.json()
        setProducts(resp)
        console.log(products);

    }
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div className="saludo">
            <h2>ItemlistContainer</h2>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
