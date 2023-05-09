import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Umubyeyisent = () => {
  return (
    <div>
      <Header />
      <div className="login h-full py-4 font-normal">
        <div className="forg flex justify-center  mx-auto h-5/6 p-4 w-4/12 rounded-2xl" >
            <content className=' p-12 flex  flex-col items-center '>
                <AiFillUnlock className='bg-white m-6 p-2 text-5xl rounded-full text-green-700 text-center' />
                <p className='py-16 font-bold text-center'>We have sent your Password reset instruction to your Email !!</p>
                <Link to="/Login"> <p className='font-bold mt-4 underline'>Go Back to LogIn</p> </Link>
            </content>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Umubyeyisent
