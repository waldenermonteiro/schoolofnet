import React, { useEffect, useState } from 'react';
import { Table, Badge, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { convertDateToBr } from '../utils'
import { verificationAlert } from '../utils/messages'
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        const dataLocal = localStorage.getItem("data") ? JSON.parse(localStorage.getItem('data')) : []
        setData(dataLocal)
    }, [])
    const deleteItem = (index, item) => {
        verificationAlert({ index, message: `Are you sure you want to delete the ${item.name} user?` }, deleteItemCallback)
    }
    const deleteItemCallback = (index) => {
        const arr = data
        arr.splice(index, 1)
        localStorage.setItem("data", JSON.stringify(arr))
        setData(JSON.parse(localStorage.getItem('data')))
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
                                <Button color="danger" onClick={() => deleteItem(index, item)} size="sm" ><i className="fas fa-trash"></i></Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Home