import React from 'react'
import Schedule from '../pages/Healthcare/Schedule'

import { Link } from 'react-router-dom'
const DoctorNav = () => {
  return (
    <div>
      <nav>
        <ul className='doctornav font-bold'>
        <li>
            <Link to="/"><li>Home</li></Link>
          </li>
        <li>
          <ParentList />
        </li>  
        <li>
        <HealthRegist />

        </li>
          <li>
            <Message />
          </li>
          <li>
            <Appointmentlist/>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DoctorNav
