import React,{useState} from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login=({setLoginUser})=>{
    const history = useHistory();
   const [user,setUser]=useState({
       email:"",
        password:""
    })
    const Changes=(e)=>{
        const {name ,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
        console.log(user);
    }

    const login =()=>{
        axios.post("http://localhost:9000/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        }
            )
    }

    return (
        <div className="login">
            <div className="content">
                <h1>Login</h1>
                <div><input type="text" name="email" vlaue={user.email} placeholder="Enter Your Email" onChange={Changes}></input></div>
                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={Changes}></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={()=>history.push("/register")}>Register</div>
            </div>
        </div>
    )
}

export default Login;