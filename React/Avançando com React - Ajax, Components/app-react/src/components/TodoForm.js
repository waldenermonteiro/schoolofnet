import React, { useState } from 'react';

function TodoForm(props) {
    const [todo, setTodo] = useState('');
    const onAdd = (event) => {
        event.preventDefault()
        props.pushToItems(todo)
        setTodo('')
    }
    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    return (
        <div>
            <div className="form-group">
                <input className="form-control" type="text" value={todo} onChange={handleChange} name="name" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}

export default TodoForm