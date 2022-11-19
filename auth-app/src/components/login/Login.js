import React,{useState} from "react";
import "../login/login.css";
import useHistory from 'react-router-dom'
import axios from "axios";
const Login = ({setLoginUser}) => {
  const history=useHistory();
  const [user, setUser] =useState( {
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]:value
    })
  };

  // login onclick function
  const login=()=>{
      axios.post("http://localhost:5000/login",user)
      .then(res=>{
        alert(res.data.message)
      setLoginUser(res.data.user)
    history.push("/")})
  }

  return <div className="login">
    {console.log(user)}
    <h1>Login Here</h1>
    
    <input type="email" name="email" value={user.email}  placeholder="enter your email" onChange={handleChange}/>
    <input type="password" name="password" value={user.password}  placeholder="Enter your password"onChange={handleChange} />
    <div className="button" onClick={login}>Login</div>
    <div>or</div>
    <div className="button" onClick={()=>history.push("/register")}>Register</div>
  </div>;
};
export default Login;
