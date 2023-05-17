import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import prof from '../../img/profile.png'

import ParentList from '../Healthcare/Parentlist'
import HealthRegist from '../Healthcare/HealthRegist'
import Message from '../Healthcare/Message'
import Appointmentlist from '../Healthcare/Appointmentlist'
import { Link } from 'react-router-dom'
import { FaUserPlus } from 'react-icons/fa';
import { AiFillMessage } from "react-icons/ai";
import { BsPeople, BsPersonLinesFill } from "react-icons/bs";
const HealthHome = () => {
    return (
        <div>
            <div >
                <Header />
                <div className='healthbg flex w-full'>
                    <div className='w-3/12 px-12 py-20'>
                        <ul className='  doctornav rounded-3xl  flex flex-col justify-center pl-20 py-32'>
                        <img src={prof} alt='profile' className='rounded-full w-20 h-20 p-4 ml-10' />
                        <p>doctor@gmail.com</p>
                            <li className='mt-12 font-semibold flex gap-2'>
                                <FaUserPlus/> <HealthRegist />

                            </li>
                            <li className='mt-12 font-semibold flex gap-2'>
                               <AiFillMessage/> <Message />
                            </li>
                            <li className='mt-12 font-semibold flex gap-2'>
                                <BsPersonLinesFill/> <Appointmentlist />
                            </li>
                            <li className='mt-12 font-semibold flex gap-2'>
                            <BsPeople/> <ParentList />
                            </li>

                            <li className='underline mt-12 font-semibold'>
                               <Link to="/"> Log Out</Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className='w-9/12 '>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HealthHome