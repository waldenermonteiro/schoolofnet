import React, { useState } from 'react';

function TestHooks() {
    // Declare uma nova variável de state, a qual chamaremos de "count"
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={updateCount}>
                Click me
      </button>
        </div>
    );
}

export default TestHooks