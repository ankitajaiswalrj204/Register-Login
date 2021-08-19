import React from "react";
import "./homepage.css";
import { useHistory } from "react-router-dom";

const Homepage=()=>{
    const history = useHistory();

    return (
        <div className="Homepage">
            <div className="content">
                <h1 className="heading">Hello Homepage</h1>
                <button className="btn" onClick={()=>history.push("/login")}>Logout</button>
            </div>
        </div>
    )
}

export default Homepage;