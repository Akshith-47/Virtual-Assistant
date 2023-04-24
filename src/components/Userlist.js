import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Login.css';
import StudId from './Ex1.js';
function Userlist(){

    const[userlist, setuserlist] = useState([]);

    useEffect(()=>{

        axios.get(`http://localhost:5000/dept/${StudId}`).then(
            res=>{
                console.log(res);
                setuserlist(res.data);
            }).catch(err=>{
                console.log(err);
            })

    },[])
    
    const userdata = userlist.map((obj)=>{
         return <tr>
            <td>{obj.uname}</td>
            <td>{obj.dName}</td>
            <td>{obj.SID}</td>
         </tr>
    })

   return (
    <div>
        <h1>USERLIST</h1>
        <table className='form1'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Dept. Name</th>
                    <th>studentId</th>
                </tr>
            </thead>
            <tbody>
                {userdata}
            </tbody>
        </table>
    </div>
   )
}

export default Userlist;