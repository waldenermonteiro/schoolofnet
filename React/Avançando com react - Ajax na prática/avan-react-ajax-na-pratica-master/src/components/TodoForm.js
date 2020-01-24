import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const TodoForm = ({ handleSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    return (
        <form>
          <Grid item xs={12}>
              <TextField id="title" value={value} onChange={handleChange} name="title" label="Title" margin="normal" />
          </Grid>  
          <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={ () => handleSubmit(value) }>Save</Button>
          </Grid>                        
        </form>
    );
}

export default TodoForm;