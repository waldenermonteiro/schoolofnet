import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';

const TodoList = ({ todos, handleRemove }) => {
    return (
        <List>
            { todos.map((todo, index) => (
                <ListItem key={index} dense button>
                    <ListItemText primary={todo.title} />
                    <ListItemSecondaryAction>
                        <Button color="primary" onClick={ () => handleRemove(todo.id)}>Delete</Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default TodoList;