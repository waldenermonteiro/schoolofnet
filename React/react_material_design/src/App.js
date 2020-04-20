import React, { Component } from "react";
import "./App.css";
import { Button, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
  },
};
class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>
        <Button variant="contained" color="primary">
          Button Primary Modify
        </Button>
        <Button variant="contained">Button Default</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
