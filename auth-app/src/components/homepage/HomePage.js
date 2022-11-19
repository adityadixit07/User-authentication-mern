import React from 'react'
import '../homepage/homepage.css'
const HomePage=({setLoginUser})=> {
    return (
      <div className='homepage'>
        <h1>Start now homepage</h1>
        <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
      </div>
    )
}
export default HomePage;
