import React, { useState } from 'react';
function State() {
    const [name] = useState('Waldener Monteiro')
    const [age] = useState(22)
    return (
        <div>
            <h1>Hello, My name is {name} and</h1>
            <h1>My age is {age} years</h1>
        </div>

    );
}
export default State