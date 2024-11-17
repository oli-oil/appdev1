import React, { useState } from "react";

const CounterComponent = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1> Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1) }>Increment</button>
            <button onClick={() => setCounter(counter - 1) }>Decrement</button>
        </div>
    );
    
};

export default CounterComponent;