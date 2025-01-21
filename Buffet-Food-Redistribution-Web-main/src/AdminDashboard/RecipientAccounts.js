
// import React, { useState, useEffect } from 'react';
// import { Container, Button, Table } from 'react-bootstrap';
// import axios from 'axios';

// const RecipientAccounts = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5282/api/Donor/AllDonors');
//             // Assuming response.data is an array of users with fields donorId, donorName, donorEmail, donorPhoneNum, donorAddress, password
//             setUsers(response.data); // Update state with fetched users
//         } catch (error) {
//             console.error('Error fetching users:', error);
//             // Handle error as needed
//         }
//     };

//     const addUser = () => {
//         const newName = prompt("Enter user's name:");
//         const newRole = prompt("Enter user's role (donor/recipient):");
//         if (newName && newRole) {
//             // Implement logic to add user on backend and then fetch updated list
//             // Example: axios.post('http://localhost:5282/api/Donor/AddDonor', { name: newName, role: newRole })
//             //    .then(() => fetchUsers())
//             //    .catch(error => console.error('Error adding user:', error));
//         }
//     };

//     const removeUser = (id) => {
//         // Implement logic to remove user on backend and then fetch updated list
//         // Example: axios.delete(`http://localhost:5282/api/Donor/DeleteDonor/${id}`)
//         //    .then(() => fetchUsers())
//         //    .catch(error => console.error('Error removing user:', error));
//     };

//     const updateUser = (id) => {
//         const newName = prompt("Enter new name:");
//         const newRole = prompt("Enter new role (donor/recipient):");
//         if (newName && newRole) {
//             // Implement logic to update user on backend and then fetch updated list
//             // Example: axios.put(`http://localhost:5282/api/Donor/UpdateDonor/${id}`, { name: newName, role: newRole })
//             //    .then(() => fetchUsers())
//             //    .catch(error => console.error('Error updating user:', error));
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center">
//             <Container className="my-4 px-3 m-5 p-3 border">
//                 <h2 className="text-center mb-4">User Accounts</h2>
//                 <div className="d-flex justify-content-end mb-3">
//                     {/* Add button to add a new user */}
//                     {/* <Button variant="primary" onClick={addUser}>Add User</Button> */}
//                 </div>
//                 <div className="table-responsive">
//                     <Table className="table" bordered hover>
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone Number</th>
//                                 <th>Address</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map(user => (
//                                 <tr key={user.donorId}>
//                                     <td>{user.donorId}</td>
//                                     <td>{user.donorName}</td>
//                                     <td>{user.donorEmail}</td>
//                                     <td>{user.donorPhoneNum}</td>
//                                     <td>{user.donorAddress}</td>
                                    
//                                     <td>
//                                         <Button
//                                             className="me-2"
//                                             size="sm"
//                                             variant="outline-primary"
//                                             onClick={() => updateUser(user.donorId)}
//                                         >
//                                             Edit
//                                         </Button>
//                                         <Button
//                                             size="sm"
//                                             variant="outline-danger"
//                                             onClick={() => removeUser(user.donorId)}
//                                         >
//                                             Remove
//                                         </Button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default RecipientAccounts;


import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const RecipientAccounts = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5282/api/Recipient/AllRecipients');
            // Assuming response.data is an array of recipients with fields id, recipientName, recipientEmail, recipientPhoneNum, recipientAddress
            setUsers(response.data); // Update state with fetched recipients
        } catch (error) {
            console.error('Error fetching recipients:', error);
            // Handle error as needed
        }
    };

    const addUser = () => {
        const newName = prompt("Enter recipient's name:");
        if (newName) {
            axios.post('http://localhost:5282/api/Recipient/AddRecipient', { recipientName: newName })
                .then(() => fetchUsers())
                .catch(error => console.error('Error adding recipient:', error));
        }
    };

    const removeUser = (id) => {
        axios.delete(`http://localhost:5282/api/Recipient/DeleteRecipient/${id}`)
            .then(() => fetchUsers())
            .catch(error => console.error('Error removing recipient:', error));
    };

    const updateUser = (id) => {
        const newName = prompt("Enter new name:");
        if (newName) {
            axios.put(`http://localhost:5282/api/Recipient/UpdateRecipient/${id}`, { recipientName: newName })
                .then(() => fetchUsers())
                .catch(error => console.error('Error updating recipient:', error));
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <Container className="my-4 px-3 m-5 p-3 border">
                <h2 className="text-center mb-4 text-success">Recipient Accounts</h2>
                {/* <div className="d-flex justify-content-end mb-3">
                    <Button variant="primary" onClick={addUser}>Add Recipient</Button>
                </div> */}
                <div className="table-responsive">
                    <Table className="table" bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.recipientName}</td>
                                    <td>{user.recipientEmail}</td>
                                    <td>{user.recipientPhoneNum}</td>
                                    <td>{user.recipientAddress}</td>
                                    <td>
                                        {/* <Button
                                            className="me-2"
                                            size="sm"
                                            variant="outline-primary"
                                            onClick={() => updateUser(user.id)}
                                        >
                                            Edit
                                        </Button> */}
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default RecipientAccounts;
