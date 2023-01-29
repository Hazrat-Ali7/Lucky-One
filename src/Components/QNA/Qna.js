import React from 'react';

const Qna = () => {
    return (
        <div>
            <h2>Q1. How React works?</h2>
            <p>A: React is a JavaScript library. It maintains a  virtual DOM. So when it needs to update the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most easiest way to update the browser’s DOM. React elements are easy to create than browser DOM. So it makes the work faster.</p>

            <h2>Q2. How useState works?</h2>
            <p>A: useState is a react hook, that is being use for updating the state of something. When we use useState it give us an array of two thing, one is a variable and other one is a function to update the value of that variable. It is a easiest way to a state of an element also time saving.</p>
        </div>
    );
};

export default Qna;