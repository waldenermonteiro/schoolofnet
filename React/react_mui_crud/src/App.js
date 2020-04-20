import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import './App.css'

import CreateTodo from "./components/CreateTodo";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as TodoActions } from "./store/ducks/todos";

class TodoList extends Component {
  useStyles() {
    return makeStyles({
      table: {
        minWidth: 650,
      },
    });
  }
  render() {
    const { todos, toggleTodo, removeTodo } = this.props;
    const classes = this.useStyles();
    return (
      <Container maxWidth="lg">
        <CreateTodo class="floatButton"></CreateTodo>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Texto</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell align="center">{todo.id}</TableCell>
                  <TableCell align="center">{todo.text}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => toggleTodo(todo.id)}>
                      Toggle
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => removeTodo(todo.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
