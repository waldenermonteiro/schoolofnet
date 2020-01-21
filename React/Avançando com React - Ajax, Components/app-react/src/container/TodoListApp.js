import React, { useState ,useEffect } from 'react';
import TodoForm from './../components/TodoForm'
import TodoList from './../components/TodoList'
import ContainerApp from './../components/Container'
import { Message, MessageSuccess } from './../components/Message'

function TodoListApp() {
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result => result.json())   
            .then(result => console.log(result))   
      });

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
                <Message title="TodoList"></Message>
                <MessageSuccess message="MessageSuccess"></MessageSuccess>
                <TodoForm pushToItems={pushToItems} />
                <hr />
                <TodoList items={data} removeFromItems={removeFromItems} />
            </div>
        </ContainerApp>
    );
}

export default TodoListApp