// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);

//     // Replace this URL with the URL of your authentication endpoint
//     const response = await fetch('https://your-api-url.com/authenticate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     setIsLoading(false);

//     if (response.ok) {
//       const data = await response.json();
//       setIsLoggedIn(data.success);
//       if (data.success) {
//         history.push('/healthcare-home'); // redirect to healthcare home
//       }
//     } else {
//       setIsLoggedIn(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit" disabled={isLoading || isLoggedIn}>
//         {isLoading ? 'Loading...' : isLoggedIn ? 'Logged in' : 'Log in'}
//       </button>
//     </form>
//   );
// }



import React, { useState } from 'react';

function HealthLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://growtogether-production.up.railway.app/api/doctor/login/', {
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

      const data = await response.json();
      const token = data.token;
      // TODO: store the token in local storage or a state management library
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default HealthLogin;