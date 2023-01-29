import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { product, event } = props
    const { name, price, img } = product
    // console.log(name);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <button onClick={() => event(product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to Cart</button>
        </div>
    );
};

export default Product;