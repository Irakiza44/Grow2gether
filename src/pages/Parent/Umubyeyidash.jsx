import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import im1 from '../../img/welcome1.png'
import im2 from '../../img/welcome2.png'
import im3 from '../../img/welcome3.png'
import im4 from '../../img/welcome4.png'
import prof from '../../img/profile.png'
import { FaBell, FaCalendar, FaRocketchat } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import status from '../../img/semester.png'

const Umubyeyidash = () => {
    return (
        <div>
            <Header />
            <body className='flex gap-3 umubyeyi'>
                <aside className='w-1/6  ml-12 mb-8 umubyeyidash mt-4 rounded-3xl'>
                    <div className='flex justify-center '><img src={prof} alt='profile' className='w-12 h-12 rounded-full' />
                    </div>
                    <content className="">
                        <p className='px-12 justify-start font-bold text-lg flex'>UMUBYEYI Mother</p>
                        <p className='px-12 text-md  justify-start flex'>groupe7@gmail.com</p>
                        <Link to="/UmuMessage"><span className='px-12 gap-2 pt-4 flex justify-start font-bold'><FaRocketchat /> Messages </span></Link>
                        <p className='px-12 gap-2 flex justify-start font-bold pt-8'><FaBell /> Notification</p>
                        <Link to="/UmuSchedule"><p className='px-12 gap-2 flex justify-start font-bold pt-8'><FaCalendar />Schedule </p></Link>
                        <p className='px-12 gap-2 flex justify-start font-bold pt-8'>Request a Doctor</p>
                        <p className='px-12 gap-2 flex justify-start font-bold pt-8'><img src={status} className='w-10' alt='status' />Status </p>
                         <Link to="/" className='px-12 gap-2 flex justify-start font-bold pt-8 pb-12 underline'>LogOut</Link>
                    </content>
                </aside>
                <div className='gird lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white justify-between lg:ml-52 md:ml-32 sm:ml:12 '>
                    <div className='flex  lg:gap-52 md:gap-32 sm:gap-12 justify-center pt-12'>
                        <div ><img src={im1} alt='image1' />
                            <p className='text-lg text-center font-bold'>Pregnance Service</p></div>
                        <div ><img src={im3} alt='image1' />
                            <p className='text-lg text-center font-bold'>Pediatric Service</p></div>
                    </div>

                    <div className='flex lg:gap-52 md:gap-32 sm:gap-12 justify-center pt-12 pb-9'>
                        <div ><img src={im2} alt='image1' />
                            <p className='text-lg text-center font-bold'>Health Adivisor</p></div>
                        <div ><img src={im4} alt='image1' />
                            <p className='text-lg text-center font-bold'>Other Services</p></div>
                    </div>
                </div>

            </body>
            <Footer />
        </div>
    )
}

export default Umubyeyidash
