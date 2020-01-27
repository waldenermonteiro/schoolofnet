import React, { useState, useEffect } from 'react';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
function Insert() {
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, [])

    const onChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setName(value)
        console.log(name)
    }

    const onChange2 = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setCheck(value)
        console.log(value)
    }

    const handleStore = async () => {
        const arr = data
        arr.push({ name, check })
        await setData(arr)
        localStorage.setItem('data', JSON.stringify(data))
    }

    return (
        <div>
            <h2>New Item</h2>
            <Form>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text" value={name} onChange={onChange} name="name" id="name" placeholder="Insert item name here" />
                </FormGroup>
                <FormGroup check>
                    <Label check></Label>
                    <Input type="checkbox" name="check" id="check" check={check} onChange={onChange2} /> {' '}
                    Done?
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={handleStore}>Add</Button>
                    <Link to="/" className="btn btn-secondary">Back To list</Link>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Insert