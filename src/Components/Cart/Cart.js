import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.selectedItem);
    const { name, img } = props.selectedItem
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;