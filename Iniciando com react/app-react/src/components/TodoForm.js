import React, { useState} from 'react';

function TodoForm({insertToData}) {
    const [todo, setTodo] = useState();
    const onAdd = (event) => {
        event.preventDefault()
        insertToData(todo)
    }
    const handleChange = (event) => {
        setTodo(event.target.value)
      }
    return (
        <div>
            <input type="text" onChange={handleChange} name="name" id="name" placeholder="Name" />
            <button onClick={onAdd}>Click me</button>
        </div>
    )
}

export default TodoForm