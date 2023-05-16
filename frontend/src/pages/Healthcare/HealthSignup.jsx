import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HealthSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    full_name: '',
    password: '',
    confirm_password: "",
   
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://growtogether-production.up.railway.app/api/doctor/register/', formData);
      console.log('Signup successful');
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed', error);
      alert('Signup failed');
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="healthbg flex justify-center pt-8 h-screen">
          <div className="content flex flex-col items-center bg-white healthlog rounded-3xl h-4/5 py-10 px-7">
            <h2 className="font-bold text-2xl mb-6">Create Account</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSignup}>
              <input type="text" name="username" placeholder="Username" className="border border-black py-2 px-8 rounded-2xl" onChange={handleInputChange} />
              <input type="text" name="email" placeholder="Email" className="border border-black py-2 px-8 rounded-2xl" onChange={handleInputChange} />
              <input type="text" name="full_name" placeholder="Full Name" className="border border-black py-2 px-8 rounded-2xl" onChange={handleInputChange} />
              <input type="password" name="password" placeholder="Password" className="border border-black py-2 px-8 rounded-2xl" onChange={handleInputChange} />
              <input type="password" name="confirm_password" placeholder="Conform Password" className="border border-black py-2 px-8 rounded-2xl" onChange={handleInputChange} />
              
              <button type="submit" className="bg-green-800 p-1 text-white rounded-2xl m-12">Create Account</button>
            </form>
            <p>
              Already have an account?{' '}
              <Link to="/HealthLogin">
                <span className="text-green-700">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HealthSignup;
