import React,{ useState } from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Link} from "react-router-dom";
import './Login.css'

export default function Login(){

    // States for registration
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn,setLogin]=useState('');
    const [newloggedIn,setNewLogin]=useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                uname:name,
                pass:password
            }),

        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user");
        });
        console.log(name,password);
        alert(`The name you entered was: ${name}`);
        setLogin(true);
        //console.log(loggedIn);
         
        
    }
    if(loggedIn==true)
    {
        console.log(loggedIn);
        return <Redirect to="/chatgpt" />;

    }
    if(newloggedIn==true){
        return <Redirect to="/register"/>;
    }
    return (
       
       // <div className="login">
        //    <h3>Registration</h3>
       // {/* Calling to the methods */}
        <div>
        <form onSubmit={handleSubmit} class="form">
            {/* Labels and inputs for form data */}
            <h3>Sign in</h3>
            <div class="form-control">
            <label className="label" class="label">UserName</label>
            <input className="input" placeholder='username'
            value={name} type="text"
            onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label">Password</label>
            <input  className="input"  placeholder='password'
            value={password} type="password"
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <button  className="button" type="submit" >
            Submit
            
            </button>
            </div>
        </form>
        </div>
    );
}
