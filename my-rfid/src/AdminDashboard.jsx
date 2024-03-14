// AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'

const AdminDashboard = () => {
    // const [data, setData] = useState([]);
    let data = [
        { name: 'SWAROOP MISTRI', companyName: 'SWAROOP TECHNO', tagId: '001', action: '' },
        { name: 'AMIT DWIVEDI', companyName: '360BrightMedia', tagId: '002', action: '' },
        // Add more data as needed
    ];

    // useEffect(() => {
    //     const socket = io('http://localhost:4000');

    //     socket.on('dataUpdated', (updatedData) => {
    //         setData(updatedData);
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    const handleAction = (name, companyName) => {
        let data = {
            name,
            companyName
        }
        const response = axios.post('https://nice-puce-leopard-hem.cyclic.app/postData', data)
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button>Filter</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Tag ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.companyName}</td>
                            <td>{item.tagId}</td>
                            <td>
                                <button onClick={() => handleAction(item.name, item.companyName)}>Action</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
