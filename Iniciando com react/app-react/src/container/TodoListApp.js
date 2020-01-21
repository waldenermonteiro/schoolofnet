import React, { useState } from 'react';
import TodoForm from './../components/TodoForm'
import TodoList from './../components/TodoList'
import ContainerApp from './../components/Container'

function TodoListApp() {
    const [data, setData] = useState([]);

    const pushToItems = (todoItem) => {
        setData([...data, todoItem])
    }
    const removeFromItems = (index) => {
        data.splice(index, 1)
        const updateItems = [...data]
        setData(updateItems)
    }

    return (
        <ContainerApp>
            <div className="col-12">
                <h2>TodoList</h2>
                <TodoForm pushToItems={pushToItems} />
                <hr />
                <TodoList items={data} removeFromItems={removeFromItems} />
            </div>
        </ContainerApp>
    );
}

export default TodoListApp