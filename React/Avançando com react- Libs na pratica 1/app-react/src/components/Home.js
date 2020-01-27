import React, { useEffect, useState } from 'react';
import { Table, Badge } from 'reactstrap'
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))
    }, [])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>check</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.check ? 'true' : 'false'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Home