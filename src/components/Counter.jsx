import React from "react";

function Counter() {
    // Set up the state for the count value
    const [count, setCount] = useState(0);

    // Add functions to increase and decrease the count

    // Return some JSX
    return (
        <div>
            <p>Count: {count}</p>
        </div>
    )
}

export default Counter;