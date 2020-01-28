import React, { useState } from 'react';

function Events() {
    // Declare uma nova variável de state, a qual chamaremos de "count"
    const [data, setData] = useState([]);
    return (
        <div>
            <input type="text" onChange={handleChange} name="name" placeholder="Name" />
            <button onClick={updateCount}>
                Click me
      </button>
        </div>
    );
}

export default Events