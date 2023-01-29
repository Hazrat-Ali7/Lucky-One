import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import Cart from '../Cart/Cart'
import './Products.css'
import Picked from '../Cart/Picked/Picked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [selectedItems, setSelectedItems] = useState([])
    const addToCart = product => {
        if (selectedItems.includes(product)) {

        }
        else {
            const items = [...selectedItems, product]
            if (selectedItems.length < 4) {
                setSelectedItems(items);
            }
        }
        setPickedItem([])
    }


    const [pickedItem, setPickedItem] = useState([])
    function randomNumber(max) {
        let randomNumber = Math.random() * max - 1
        let result = Math.floor(randomNumber) + 1;
        return result;
    }

    const chooseOne = () => {
        if (selectedItems.length > 1) {
            const choosenitem = selectedItems[randomNumber(selectedItems.length)];
            setPickedItem(choosenitem);
            const emptyCart = []
            setSelectedItems(emptyCart)
        }

    }


    const resetCart = () => {
        setSelectedItems([])
        setPickedItem([])
    }

    return (
        <div className='main-area'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.model}
                        product={product}
                        event={addToCart}
                    ></Product>)
                }
            </div>
            <div>
                <div className='carts'>
                    <h4>Selected Items:</h4>
                    {
                        selectedItems.map(selectedItem => <Cart
                            key={selectedItem.model}
                            selectedItem={selectedItem}
                        ></Cart>)
                    }
                    <div className='cart-btn'>
                        <button onClick={chooseOne}>Choose One</button>
                        <button onClick={resetCart} id='cart-btn2'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Reset Cart</button>
                    </div>
                    <Picked item={pickedItem}></Picked>
                </div>

            </div>
        </div>
    );
};

export default Products;