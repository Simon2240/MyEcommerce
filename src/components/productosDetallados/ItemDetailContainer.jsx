import React from 'react';
import ItemDetail from "./cardDetail/ItemDetail";
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})
    const getProduct = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const resp = await data.json()
        setProduct(resp)
    }

    console.log(product)

    useEffect(() => {
        getProduct()
    },[]);

    return (
        <div className="viewportDetail">
            <ItemDetail 
                titulo={product.title} 
                descripcion={product.description} 
                image={product.image} 
                price={product.price} 
            />
        </div>
    );
}

export default ItemDetailContainer;
