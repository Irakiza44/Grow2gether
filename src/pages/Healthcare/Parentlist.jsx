import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
const Parentlist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://growtogether-production.up.railway.app/api/users/');
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
                console.log('Data fetched successfully');
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Link onClick={handleOpen}>Parent List</Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="mt-32 w-auto ">

                    <div className="flex justify-end pt-12 pr-20">
                        <content className="bg-white h-auto w-9/12 ">
                            <div className='flex justify-end'>
                                <button onClick={handleClose} className=' rounded-3xl px-5 py-1 text-white '><FaTimes className='text-red-500 text-2xl' /></button>
                            </div>
                            <p className='text-4xl mb-8 font-bold underline text-center'>Parent List</p>
                            <div className='flex justify-center pb-12'>
                                {isLoading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <ul>
                                        {users.map(user => (
                                            <li key={user.id}>{user.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                        </content>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
export default Parentlist;