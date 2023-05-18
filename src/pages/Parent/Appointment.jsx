import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios';

const Appointment = () => {
    const [formData, setFormData] = useState({
        appointment_date: '',
        reason: '',

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://growtogether-production.up.railway.app/api/appointments/', formData);

            alert('Appointment Submmited Successfull!');
        } catch (error) {
            console.error(' failed to Submmite Appointment', error);
            alert('failed to Submmite Appointment');
        }
    };

    return (
        <div>
            <Header />
            <div className="login h-full py-4 font-normal ">
                <div className="forg flex justify-center  mx-auto h-5/6 p-4 w-4/12 rounded-2xl mt-7" >
                    <form className=' p-12 flex  flex-col ' onSubmit={handleSignup}>

                        <p className='font-bold text-2xl'>MAKE YOUR APPOINTMENT</p>
                        <label className='mt-9 font-bold text-xl'>Date</label>
                        <input type='text' name="appointment_date" className='p-2 w-full mt-4 rounded-3xl' placeholder='2023-05-18' onChange={handleInputChange}/>
                        <label className='mt-4 font-bold text-xl'>Reason</label>
                        <textarea type='text' name="reason" className='px-7 pb-44 w-full mt-4 rounded-3xl' onChange={handleInputChange}/>
                        <button type="submit" className='font-bold mt-5 rounded-xl p-2 dropbtn mx-20'>Send Appointment</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Appointment
