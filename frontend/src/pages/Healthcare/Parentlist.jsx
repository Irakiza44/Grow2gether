import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import axios from "axios";
import { useState,useEffect } from 'react';
const Parentlist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://growtogether-production.up.railway.app/api/users/')
        .then(res=>{console.log(res);
})
    },[users])

   console.log(users);

    return (
        <div>
            <Link onClick={handleOpen}>Parentlist</Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="mt-32 w-auto ">

                    <div className="flex justify-center pt-2">
                        <content className="bg-white h-auto w-11/12 ">
                            <div className='flex justify-end'>
                                <button onClick={handleClose} className=' rounded-3xl px-5 py-1 text-white '><FaTimes className='text-red-500 text-2xl'/></button>
                            </div>
                            <div className='flex justify-center'>
                                <p className='text-4xl mb-16 font-bold py-4 underline'>Parent List</p>
                                <ol>
                                {users.map( user=>{
                    return(
                       <li key={user.email}>
                        {user.email}{user.first_name}{user.last_name}</li>
                         )
                        }
                        )
                        }
                                </ol>
                            </div>

                        </content>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
export default Parentlist;