import React, { useState, useEffect } from 'react';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { alertSuccess } from '../utils/messages'
function Insert() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [check, setCheck] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        setData(localStorage.getItem("data") ? JSON.parse(localStorage.getItem('data')) : [])

    }, [])

    const _generateRandomId = () => (Math.random().toString(24).substring(2,10))

    const onChangeName = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setName(value)
    }

    const onChangeLastName = ({ target }) => {
        const value = target.value
        setLastName(value)
    }
    
    const onChangeDate = ({ target }) => {
        const value = target.value
        setDate(value)
    }
    const onChangeCheck = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setCheck(value)
    }
    const handleStore = async () => {
        const arr = data
        const id = _generateRandomId()
        arr.push({ id, name, lastName, date, check })
        await setData(arr)
        localStorage.setItem('data', JSON.stringify(data))
        alertSuccess('User successfully registered')
    }

    return (
        <div>
            <h2>New Item</h2>
            <Form>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input type="text" value={name} onChange={onChangeName} name="name" id="name" placeholder="Insert item name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">LastName: </Label>
                    <Input type="text" value={lastName} onChange={onChangeLastName} name="lastName" id="lastName" placeholder="Insert item lastName here" />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date of birth: </Label>
                    <Input type="date" value={date} onChange={onChangeDate} name="date" id="date" placeholder="Insert item date here" />
                </FormGroup>
                <FormGroup check>
                    <Label check></Label>
                    <Input type="checkbox" name="check" id="check" check={check} onChange={onChangeCheck} /> {' '}
                    Done?
                </FormGroup>
                <FormGroup className="mt-3" >
                    <Button color="primary" className="mr-3"  onClick={handleStore}>Add</Button>
                    <Link to="/users" className="btn btn-secondary">Back To list</Link>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Insert