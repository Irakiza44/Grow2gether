import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const HealthSignup = () => {
  return (
    <div>
      <Header />
      <body className=''>
        <div className="healthbg flex justify-center  pt-8 h-screen">
        <content className="flex  flex-col items-center bg-white healthlog rounded-3xl h-4/5">
            <p className='px-7 py-10 font-bold text-2xl'>Create Account</p>
            <form className='flex flex-col gap-4'>
                <input type='text' placeholder='Firstname' className='border border-black py-2 px-8 rounded-2xl'/>
                <input type='text' placeholder='Lastname' className='border border-black py-2 px-8 rounded-2xl'/>
                <input type='password' placeholder='Password' className='border border-black py-2 px-8 rounded-2xl'/>
                <input type='password' placeholder='Conform Password' className='border border-black py-2 px-8 rounded-2xl'/>
                 <button className='bg-green-800 p-1 text-white rounded-2xl m-12'><Link to="/HealthLogin">Create Account</Link></button>
            </form>
            <p>Already have an Account? <Link to="/HealthLogin"> <span className='text-green-700'>LOGIN</span></Link></p>

        </content>
        </div>
      </body>
      <Footer/>
    </div>
  )
}

export default HealthSignup
