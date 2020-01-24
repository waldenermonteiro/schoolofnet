import client from './index';

const _genId = () => `${Math.random().toString().substr(2, 10)}`;

const getTodos = async() => await client.get('/todos');
const postTodo = async(title) => await client.post('/todos', { id: _genId(), title });
const removeTodo = async(id) => await client.delete(`/todos/${id}`);

export { getTodos, postTodo, removeTodo };