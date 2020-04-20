import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as TodoActions } from "../store/ducks/todos";

function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({ text: "" });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setTodo({ ...todo, text: value });
  };
  const handleSubmit = (e) => {
    props.addTodo(todo.text);
    handleClose();
  };

  return (
    <div className={props.class}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Text" type="text" fullWidth value={todo.text} onChange={onChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
