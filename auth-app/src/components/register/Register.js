import React, { useState } from "react";
import "../register/register.css";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const Register = () => {
  const history=useHistory();
  const [user, setUser] =useState( {
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setUser({
        ...user,
        [name]:value
    })
  };
  // register validation
  const register=()=>{
    const{name,email,password,reEnterpassword}=user
    if(name && email && password && (password===reEnterpassword)){
      axios.post("http://localhost:5000/register",user)
      .then(res=>{alert(res.data.message)
      history.push("/login")})
      // alert("Successfully Registered")
    }else{
      alert("Invalid input")
    }
  }
  return (
    <div className="register">
        {console.log(user)}
      <h1>Register Here</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterpassword"
        value={user.reEnterpassword}
        placeholder="Re-enter your password"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button" onClick={()=>history.push("/login")}>Login</div>
    </div>
  );
};
export default Register;
