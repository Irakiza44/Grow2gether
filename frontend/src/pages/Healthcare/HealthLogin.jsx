import React, { useEffect, useState } from 'react'
import DoctorNav from '../../components/DoctorNav'
import { Link,useNavigate} from 'react-router-dom'

const HealthLogin = () => {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");

  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('57c3451911ecbdb60e243551d56ff2d569de365d')){
      navigate.push("./HealthHome")
    }
  },[])
  async function login(){
    console.warn(username,password)
    let item ={username,password};
    let result = await fetch("https://michelnasri.pythonanywhere.com/login/",{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
  },
  body:JSON.stringify(item)
  })
  result= await result.json();
  localStorage.setItem("57c3451911ecbdb60e243551d56ff2d569de365d", JSON.stringify(result))
  navigate.push("/HealthHome")
  }
  return (
    <div>
      <DoctorNav />
      <body className=''>
        <div className="healthbg flex justify-center  pt-8 h-screen">
        <content className="flex justify-center flex-col items-center bg-white healthlog rounded-3xl h-4/5">
            <p className='text-4xl mb-6 font-bold'>Welcome</p>
            <form className='flex flex-col '>
                <label className='font-bold text-lg'>Enter Your Employment Id</label>
                <input type='text' className='border-black border p-2 rounded-xl mb-4'
                onChange={(e)=>setUsername(e.target.value)}></input>
                <label className='font-bold text-lg'>Password</label>
                <input type='password' className='border-black border p-2 rounded-xl mb-4 font-bold'
                onChange={(e)=>setPassword(e.target.value)}></input>
                <span className='underline'>Forget Password? <span className='setone'>Set One</span></span>
                <Link to="/HealthHome"><button className='healbtn my-8 mx-16 rounded-2xl text-lg text-white px-5 py-2'
                onClick={login}>LOGIN</button></Link> 
               <Link to="/HealthSignup"> <p className='font-bold'>Don't have account? <span className='text-green-700 underline'>SIGN UP</span></p> </Link>
            </form>
        </content>
        </div>
      </body>
    </div>
  )
}

export default HealthLogin
