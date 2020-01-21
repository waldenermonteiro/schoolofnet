import React, { useState } from 'react';
import TodoForm from './TodoForm'
function ToList() {
  const [data, setData] = useState([]);

  const insertToData = (paramTodo) => {
    setData([...data, paramTodo])
    console.log(data)
  }
  return (
    <div>
     <TodoForm insertToData={insertToData}></TodoForm>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToList