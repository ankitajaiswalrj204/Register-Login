import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register=()=>{
    const history=useHistory();

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword: ""
    })
    const Changes=(e)=>{
        const {name ,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
        console.log(user);
    }

    const register=()=>{
        const {name , email,password,reEnterPassword} =user
        if(name && email && password && (password===reEnterPassword) ){
                axios.post("http://localhost:9000/register",user)
                .then(res =>{
                    alert(res.data.message)
                    history.push("/login")
                })
        }
        else
        {
            alert("invalid input");
        }

    }

    return (
        <div className="register">
            <div className="content">
                <h1>Register</h1>
                <input name="name" value={user.name} type="text" placeholder="Enter Your Name" onChange={Changes}></input>
                <div><input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={Changes}></input></div>
                <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={Changes}></input>
                <div><input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Your Password " onChange={Changes}></input></div>
                <div className="button" onClick={()=>history.push("/login")}>Login</div>
                <div>or</div>
                <div className="button" onClick={register}><a href="/">Register</a></div>
            </div>
        </div>
    )
}

export default Register;