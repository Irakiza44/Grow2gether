import Header from '../../components/Header';
import Footer from '../../components/Footer';

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // initialize navigate


  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://growtogether-production.up.railway.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      navigate('/Umubyeyidash'); 
    } catch (error) {
      setError(error.message);
    }

  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);

  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleLoginClick = () => { };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="login h-full py-4 text-xl font-normal">
        <form className=" rounded-3xl flex flex-col justify-center items-center  mx-auto h-5/6 p-4 bg-white w-4/12 " onSubmit={handleSubmit}>
          <h1 className="font-semibold text-3xl text-center justify-center text-black mb-4">WELCOME</h1>
          <label htmlFor="text">User Name</label>
          <input
            type="text"
            className="border w-fit p-1 rounded-xl bg-gray-200"
            required
            id="username" value={username} onChange={(event) => setUsername(event.target.value)}
          /><br />

          <label htmlFor="password">Password</label>
          <div className=" flex relative">
            <input
              className="border w-fit p-1 rounded-xl bg-gray-200"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <span
              className="password-icon absolute top-2 right-2 "
              onClick={handleShowPassword}
              aria-label="Toggle password visibility">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

          </div>
          <Link to="/Umubyeyiforg" className="underline text-sm mt-4">Forget password?</Link><br />

          <div className='mb-8' >
            <input
              type="checkbox"
              id="terms-and-conditions"
              checked={isChecked}
              onChange={handleCheckboxChange} />
            <label for="terms" className=" text-xs "> I agree to Terms and contitions</label>
          </div>
          <div className=" mx-auto">
             <button
              disabled={!isChecked}
              onClick={handleLoginClick}
              className="bg-green-800 rounded-3xl content-center px-4 w-28 text-white p-2">
              Login
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Login
