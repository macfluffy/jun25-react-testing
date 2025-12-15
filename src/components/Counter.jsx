import React, {useState} from "react";

function Counter() {
    // Set up the state for the count value
    const [count, setCount] = useState(0);

    // Add functions to increase and decrease the count
    const handleIncrement = () => {
        setCount((count) => count + 1);
    };

    const handleDecrement = () => {
        setCount((count) => count - 1);
    };

    // Return some JSX
    return (
        <div>
            {/* Counter */}
            <p>Count: {count}</p>
            {/* Buttons */}
            <button onClick = {handleDecrement}>Decrement</button>
            <button onClick = {handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter;