import React, { useEffect, useState } from 'react';
import { Table, Badge, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { convertDateToBr } from '../../../utils/masks'
import { verificationAlert, alertDanger } from '../../../utils/alerts'
import UserService from '../services/UserService'
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
       getAll()
    }, [])
    const getAll = async() => {
        try {
            const response = await UserService.list()
            setData(response.data)
        } catch (error) {
            alertDanger(error)
        }
    }
    const deleteItem = (id, name) => {
        verificationAlert({ id, message: `Are you sure you want to delete the ${name} user?`, nameModule: 'user' }, deleteItemCallback)
    }
    const deleteItemCallback = async (id) => {
        try {
            await UserService.remove(id)
            await getAll()
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <Link to="/users/add" className="btn btn-primary mb-3 float-right">Add to list</Link>
            <Table dark bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Date of birth</th>
                        <th>Check</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        <tr key={index}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.lastName}
                            </td>
                            <td>
                                {convertDateToBr(item.date)}
                            </td>
                            <td>
                                {item.check ? <Badge href="#" color="success">True</Badge> : <Badge href="#" color="danger">false</Badge>}
                            </td>
                            <td>
                                <Link className="btn btn-success btn-sm mr-3" size="sm" to={`users/edit/${item.id}`} ><i className="fas fa-pen"></i></Link>
                                <Button color="danger" onClick={() => deleteItem(item.id, item.name)} size="sm" ><i className="fas fa-trash"></i></Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Home