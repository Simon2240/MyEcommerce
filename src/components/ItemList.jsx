import React from 'react';
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div>
            {products.map((item, key) => (
                <Item key={key} item={item} />
            ) )}
        </div>
    );
}

export default ItemList;

