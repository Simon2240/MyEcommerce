import React from 'react';
import "./cardDetail.css"

const ItemDetail = ({titulo , descripcion, image, price}) => {
    return (
        <div className="cardItem">
            <img src={image} alt="imagen de producto" />
            <div className="boxInfoProd">
                <div className="title"> <h2>{titulo} </h2></div>
                <div className="descripcionProd"><p>{descripcion}</p></div>
                <div className="price"><p>${price}</p></div>
            </div>
        </div>
    );
}

export default ItemDetail;
