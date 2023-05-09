import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Umubyeyiforg = () => {
  return (
    <div>
      <Header />
      <div className="login h-full py-4 font-normal">
        <div className="forg flex justify-center  mx-auto h-5/6 p-4 w-4/12 rounded-2xl" >
            <content className=' p-12 flex  flex-col items-center '>
                <AiFillLock className='bg-white m-6 p-2 text-5xl rounded-full text-green-700 text-center' />
                <p className='font-bold text-sm'>Forgot your password; Don’t worry, we got you covered !!</p>
                <p className='mt-16 font-bold'>Enter your Email for password recovery</p>
                <input type='text' className='p-2 w-full mt-4 rounded-3xl'/>
                <Link to="/Umubyeyisent"> <p className='font-bold mt-4 underline'>Send Instruction</p> </Link>
            </content>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Umubyeyiforg
