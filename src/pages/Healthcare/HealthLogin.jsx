import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HealthLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    // Reset error message on component mount
    setError(null);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('https://growtogether-production.up.railway.app/api/doctor/login/', {
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

      navigate('/HealthHome'); // navigate to health_home page
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <body className=''>
        <div className="healthbg flex justify-center  pt-8 h-screen">
          <content className="flex justify-center flex-col items-center bg-white healthlog rounded-3xl h-4/5">
            <p className='text-4xl mb-6 font-bold'>Welcome</p>

            <form className='flex flex-col ' onSubmit={handleSubmit}>
              <label className='font-bold text-lg'>Enter Your Employment Id</label>
              <input
                type='text'
                className='border-black border p-2 rounded-xl mb-4'
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />

              <label className='font-bold text-lg'>Password</label>
              <input
                type='password'
                className='border-black border p-2 rounded-xl mb-4 font-bold'
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <span className='underline'>
                Forget Password? <span className='text-green-700 font-bold'>Set One</span>
              </span>

              <button
                type="submit"
                className='healbtn my-8 mx-16 rounded-2xl text-lg text-white px-5 py-2'
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Log In'}
              </button>

              {error && <div className='text-red-700 text-center my-4 text-2xl'>{error}</div>}

              <Link to="/HealthSignup">
                <p className='font-bold'>
                  Don't have an account? <span className='text-green-700 underline'>SIGN UP</span>
                </p>
              </Link>
            </form>
          </content>
        </div>
      </body>
      <Footer/>

    </div>
  )
}

export default HealthLogin;