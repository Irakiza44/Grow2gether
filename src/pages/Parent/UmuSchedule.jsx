import React from 'react'
import { FaBell, FaCalendar, FaRocketchat } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import prof from '../../img/profile.png'
import status from '../../img/semester.png'
const UmuSchedule = () => {
    return (
        <div>
            <Header />
            <body className='flex bg-white'>
                <aside className='w-1/5 ml-12 mb-8 px-16 umubyeyidash mt-4 rounded-3xl'>
                    <div className='flex justify-center '><img src={prof} alt='profile' className='w-12 h-12 rounded-full' />
                    </div>
                    <content className="">
                        <p className='justify-start font-bold text-lg flex'>UMUBYEYI Mother</p>
                        <p className='text-md  justify-start flex'>groupe7@gmail.com</p>
                        <Link to="/UmuMessage"><span className='gap-2 pt-4 flex justify-start font-bold  '><FaRocketchat /> Messages </span></Link>
                        <p className='gap-2 flex justify-start font-bold pt-8'><FaBell /> Notification</p>
                        <Link to="/UmuSchedule"><p className='gap-2 flex justify-start font-bold pt-8 text-green-600'><FaCalendar />Schedule </p></Link>
                        <Link to="/Appointment"><p className='px-12 gap-2 flex justify-start font-bold pt-8'>Request a Doctor</p></Link>
                        <p className='gap-2 flex justify-start font-bold pt-8'><img src={status} className='w-10' alt='status'/> Status </p>
                         <Link to="/" className='gap-2 flex justify-start font-bold pt-8 pb-12 underline'>LogOut</Link>
                    </content>
                </aside>
                <div className='flex  w-screen justify-center'>
                    <p className='text-3xl underline font-bold pt-4'>To Do List</p>
                </div>

            </body>
            <Footer />
        </div>
    )
}

export default UmuSchedule
