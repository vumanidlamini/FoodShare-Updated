import React, { useState, useEffect } from 'react';
import { Container, Button, Table, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';

const UserAccounts = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5282/api/Donor/AllDonors');
            // Assuming response.data is an array of users with fields donorId, donorName, donorEmail, donorPhoneNum, donorAddress, password
            
            // Sort users alphabetically by donorName
            const sortedData = [...response.data].sort((a, b) => a.donorName.localeCompare(b.donorName));

            // Assign sequential IDs starting from 1
            const usersWithSequentialId = sortedData.map((user, index) => ({
                ...user,
                donorId: index + 1
            }));

            setUsers(usersWithSequentialId); // Update state with sorted users and sequential IDs
            setFilteredUsers(usersWithSequentialId); // Initialize filtered users with all users
        } catch (error) {
            console.error('Error fetching users:', error);
            // Handle error as needed
        }
    };

    const addUser = () => {
        const newName = prompt("Enter user's name:");
        const newRole = prompt("Enter user's role (donor/recipient):");
        if (newName && newRole) {
            axios.post('http://localhost:5282/api/Donor/AddDonor', { donorName: newName, donorRole: newRole })
                .then(() => fetchUsers())
                .catch(error => console.error('Error adding user:', error));
        }
    };

    const removeUser = (id) => {
        axios.delete(`http://localhost:5282/api/Donor/${id}`)
            .then(() => fetchUsers())
            .catch(error => console.error('Error removing user:', error));
    };

    const updateUser = (id) => {
        const newName = prompt("Enter new name:");
        const newRole = prompt("Enter new role (donor/recipient):");
        if (newName && newRole) {
            axios.put(`http://localhost:5282/api/Donor/UpdateDonor/${id}`, { donorName: newName, donorRole: newRole })
                .then(() => fetchUsers())
                .catch(error => console.error('Error updating user:', error));
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredData = users.filter(user => user.donorName.toLowerCase().includes(query));
        setFilteredUsers(filteredData);
    };

    return (
        <div className="d-flex justify-content-center">
            <Container className="my-4 px-3 m-5 p-3 border">
                <h2 className="text-center mb-4 text-success">User Accounts</h2>
                {/* <div className='bg-success'> */}
                <div className="d-flex justify-content-between mb-3 align-items-center">
                    <InputGroup className="w-100 ">
                        <InputGroup.Text> <FaSearch className='text-success'/> </InputGroup.Text>
                        <FormControl
                            type="text"
                            placeholder="Search by name"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </div>
                {/* </div> */}
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
                            {filteredUsers.map(user => (
                                <tr key={user.donorId}>
                                    <td>{user.donorId}</td>
                                    <td>{user.donorName}</td>
                                    <td>{user.donorEmail}</td>
                                    <td>{user.donorPhoneNum}</td>
                                    <td>{user.donorAddress}</td>
                                    
                                    <td>
                                        {/* <Button
                                            className="me-2"
                                            size="sm"
                                            variant="outline-primary"
                                            onClick={() => updateUser(user.donorId)}
                                        >
                                            Edit
                                        </Button> */}
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => removeUser(user.donorId)}
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

export default UserAccounts;
