// State

// JS object where property values of the component are stored
// Manged inside of the component instead of being passed into it
// like props are passed into a component.

import {useState} from 'react';

const State = () => {
    const [count, setCount] = useState(4); //useState Hook must execute in the same order

    function decCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function incCount() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={decCount}>-</button>
            <span> { count } </span>
            <button onClick={incCount}>+</button>
        </>
    );
};

export default State;