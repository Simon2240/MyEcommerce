import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import image from "../assets/imagenes-proyecto/hongosmatsusake.jpg";


const Item = ({item}) => {
    return (
      <div className="card">
        <img src={image} alt="imagen Producto" />
        <div className="cardinfo">
          <div className="titulo"><p>Hongos Matsutake</p></div>
          <div className="info"> Platillo  de hongo a la canela y la pimienta, que combina dashi, sake, mirin y azúcar,arroz al vapor con kombu dashi, salsa de soya, sake y mirin.</div>
          <Link to={`/detalle/${item.id}`}>
            <Button className="botonn">Comprar</Button>
          </Link>
        </div>
    </div>
    );
}

export default Item;
