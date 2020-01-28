import React from 'react';
function TodoListItem(props) {
const onRemove = () => {
    props.removeFromItems(props.index)
}
    return (
        <li className="list-group-item">{props.item}
            <button className="btn btn-danger" onClick={onRemove} type="button">X</button>
        </li>
    );
}

export default TodoListItem