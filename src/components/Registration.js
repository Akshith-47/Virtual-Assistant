import React,{ useState } from 'react';
import './Registration.css'

export default function Register() {

    // States for registration
    const [name, setName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                uname:name,
                fname:firstname,
                lname:lastname,
                pass:password
            }),

        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user");
        });
        console.log(`The username you entered in sign up was: ${name}`);
        console.log(firstname,lastname,password);
    }
    return (
       // <div className="login">
        //    <h3>Registration</h3>
       // {/* Calling to the methods */}
        <div>
        <form onSubmit={handleSubmit} class="form">
            {/* Labels and inputs for form data */}
            <h3>Sign Up</h3>
            <div class="form-control">
            <label className="label" class="label">FirstName</label>
            <input className="input" placeholder='firstname'
            value={firstname} type="text"
            onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label" class="label">LastName</label>
            <input className="input" placeholder='lastname'
            value={lastname} type="text"
            onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label" class="label">UserName</label>
            <input className="input" placeholder='username'
            value={name} type="text"
            onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label" class="">Password</label>
            <input  className="input"  placeholder='password'
            value={password} type="password"
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div >
            <button  className="button" type="submit" >
            Submit
            </button>
            </div>
        </form>
        </div>
    );
}
