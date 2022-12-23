import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate;
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
  
   const handleSubmit = async (e) =>{
    e.preventDefault();
    let data={
        'fname': fname,
      'lname': lname,
      'username': username,
      'avatar': avatar,
    }

   await axios.post(`http://localhost:3005/users`,data)
    alert("İstifadəçi uğurla əlavə olundu")
    window.location.href="/";
   }
    
  return (
    
    <div className="col-lg-3 md-6 col-9 mx-auto mt-5">
    <form onSubmit={handleSubmit}>
    <div className="form-outline mb-3">
        <input onChange={(e) =>{setFname(e.target.value)}} className='form-control' type="text" placeholder='First Name' />
    </div>
    <div className="form-outline mb-3">
        <input onChange={(e) =>{setLname(e.target.value)}} className='form-control' type="text" placeholder='Last Name' />
    </div>
    <div className="form-outline mb-3">
        <input onChange={(e) =>{setUsername(e.target.value)}} className='form-control' type="text" placeholder='Email' />
    </div>
    <div className="form- mb-3">
    <input onChange={(e) =>{setAvatar(e.target.value)}} className='form-control' type="text" placeholder='Avatar' />

    </div>
    <button type='submit' className='btn btn-success w-100'>Add User</button>
    </form>
   </div>
  )
}

export default AddUser