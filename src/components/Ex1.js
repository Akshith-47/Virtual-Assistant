import React,{ useState } from 'react';
import {Component} from 'react';
import './Login.css'


export default function Ex1(){

    // States for registration
    const [name, setName] = useState('');
    const [dname, setDName] = useState('');
    const [StudId,setSId] =useState('');
    const[userlist, setuserlist] = useState([]);
    const [data, setData] = useState(null);


    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/dept",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                uname:name,
                dName:dname,
                SID:StudId,
            }),

        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user");
        });
        console.log(name,dname);
        alert(`The name you entered was: ${name}`)
    }
    const handleEdit = async (event) => {
        try {
          event.preventDefault();
          console.log("hi"+StudId);
          fetch(`http://localhost:5000/dept/${StudId}`, {
            method: 'PUT',
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                uname:name,
                dName:dname,
                SID:StudId,
            }),
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data,"user");
            setuserlist(data);
            
          });
          alert(StudId);
        } catch (error) {
          console.error(error);
        }
      };
      const handleRead = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch(`http://localhost:5000/dept/${StudId}`, {
                method: 'GET',
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (event) => {
        try {
          event.preventDefault();
          console.log("hi"+StudId);
          fetch(`http://localhost:5000/dept/${StudId}`, {
            method: 'DELETE',
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data,"user");
          });
          alert(StudId);
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
       // <div className="login">
        //    <h3>Registration</h3>
       // {/* Calling to the methods */}
        <div>
        <form onSubmit={handleSubmit} class="form">
            {/* Labels and inputs for form data */}
            <h3>Sign in</h3>
            <div class="form-control">
            <label className="label" class="label">Student Name</label>
            <input className="input" placeholder='Stud. Name'
            value={name} type="text"
            onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label">Department Name</label>
            <input  className="input"  placeholder='Dept. Name'
            value={dname} type="text"
            onChange={(e) => setDName(e.target.value)} />
            </div>
            <div class="form-control">
            <label className="label">Student Id</label>
            <input  className="input"  placeholder='Student Id'
            value={StudId} type="text"
            onChange={(e) => setSId(e.target.value)} />
            </div>
            <div>
            <button  className="button" type="submit" >
            Submit
            </button>
            </div>
            <div>
            <button  className="button" type="button" onClick={handleEdit}>
            Edit
            </button>
            </div>
            <div>
            <button  className="button" type="button" onClick={handleDelete}>
            Delete
            </button>
            </div>
            <div>
            <button  className="button" type="button" onClick={handleRead}>
            Read
            </button>
            </div>
        </form>
        <div id="table">
                {data && (
                    <table id="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>dname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.SID}</td>
                                    <td>{item.uname}</td>
                                    <td>{item.dName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
        
    );
}
