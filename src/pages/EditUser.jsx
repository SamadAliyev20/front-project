import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

  const { id } = useParams();
  useEffect(() =>{
    fetch("http://localhost:3005/users/"+id)
    .then(res => res.json())
    .then(
      (result) => {
        setFname(result.user.fname)
        setLname(result.user.lname)
        setUsername(result.user.username)
        setAvatar(result.user.avatar)
      }
    )

  },[id])
 

  const handleSubmit = async event => {
    event.preventDefault();
    let data = {
      'Id':id,
      'fname': fname,
      'lname': lname,
      'username': username,
      'avatar': avatar,
    }
   await axios.put(`http://localhost:3005/users/${id}`,data)
   alert("İstifadəçi uğurla dəyişdirildi")
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
    <button type='submit' className='btn btn-success w-100'>Edit User</button>
    </form>
   </div>
  )
}

export default EditUser