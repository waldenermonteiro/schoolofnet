import React, { useState, useEffect } from 'react';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { alertSuccess, alertDanger } from '../../../utils/alerts'
import UserService from '../services/UserService'

function Insert(props) {


    const idRoute = props.match.params.id || null
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [check, setCheck] = useState(false)
    const [data, setData] = useState([])
    useEffect( async () => {
        await get()
        if (idRoute) {
            const filtered = filteredInformation()
            setInformations(filtered)
        }
    }, [])
        const get = async () => {
        await UserService.list().then((result) => {
            setData(result.data)
        }).catch((err) => {
            alertDanger(err)
        });
    }
    const filteredInformation = async () => {
        console.log(data)
        return data.filter(item => item.id === idRoute)[0]
    }
    const setInformations = ({ name, lastName, date, check }) => {
        setName(name)
        setLastName(lastName)
        setDate(date)
        setCheck(check)
    }

    const _generateRandomId = () => (Math.random().toString(24).substring(2, 10))

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
        if (idRoute) {
            const id = idRoute
            await createOrUpdate({ id, name, lastName, date, check })
            alertSuccess('User successfully modified')
            props.history.push('/users')

        } else {
            const id = _generateRandomId()
            await createOrUpdate({ id, name, lastName, date, check })
            props.history.push('/users')
        }

    }
    const createOrUpdate = async (user) => {
        if (idRoute) {
            await UserService.update(user).then((result) => {
                alertSuccess('User successfully modified')
            }).catch((err) => {
                alertDanger(err)
            });
        } else {
            await UserService.create(user).then((result) => {
                alertSuccess('User successfully modified')
            }).catch((err) => {
                alertDanger(err)
            });
        }

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
                    <Button color="primary" className="mr-3" onClick={handleStore}>Add</Button>
                    <Link to="/users" className="btn btn-secondary">Back To list</Link>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Insert