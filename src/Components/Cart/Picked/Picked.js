import React from 'react';
import './Picked.css'

const Picked = (props) => {
    const { name, img } = props.item;
    return (

        <div>
            <h4>Randomly Picked:</h4>
            <div className='picked-item'>
                <img src={img} alt="" style={{ display: img ? 'block' : 'none' }} />
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Picked;