import React, { useState, useEffect } from 'react';
import { Form, Button, Label, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { alertSuccess, alertDanger } from '../../../utils/alerts'
import UserService from '../services/UserService'

function Insert(props) {
    const idRoute = props.match.params.id || null
    const initialUser = { id: '', name: '', lastName: '', date: '', check: false }
    const [user, setUser] = useState(initialUser)
    useEffect(() => {
        if (idRoute) {
            getById().then((result) => {
                setInformations(result)
            }).catch((error) => {
                alertDanger(error)
            });
        }
    }, [])

    const getById = async () => {
        try {
            const response = await UserService.show(idRoute)
            return response
        } catch (error) {
            return error
        }
    }
    const setInformations = (result) => {
        setUser(result)
    }
 
    const onChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setUser({ ...user, [target.name]: value })
    }
    const handleStore = async () => {
        await createOrUpdate(user)
        props.history.push('/users')

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
                alertSuccess('User successfully created')
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
                    <Input type="text" value={user.name} onChange={onChange} name="name" id="name" placeholder="Insert item name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">LastName: </Label>
                    <Input type="text" value={user.lastName} onChange={onChange} name="lastName" id="lastName" placeholder="Insert item lastName here" />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date of birth: </Label>
                    <Input type="date" value={user.date} onChange={onChange} name="date" id="date" placeholder="Insert item date here" />
                </FormGroup>
                <FormGroup check>
                    <Label check></Label>
                    <Input type="checkbox" name="check" onChange={onChange} id="check" check={user.check} /> {' '}
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