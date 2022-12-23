import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';

const UserList = () => {
 const [users,setUsers]=useState([]);
 const [loading,setLoading]=useState(true)
 const [SearchValue,setSearchValue]=useState("")

 useEffect(() =>{
  const getUsers=async () =>{
    const response=await axios.get("http://localhost:3005/users")
    setUsers(response.data);
    setLoading(false)
  }
 getUsers();
 },[])

 const InputHandler = (e) =>{
   setSearchValue(e.target.value)
 }
 const filteredUsers = users.filter(user => user.fname.toLowerCase().includes(SearchValue.toLowerCase()))
   
  return (
    
    <div className="container">
      <div className="col-lg-12 tablee">
        <div className="col-lg-4 mx-auto my-5">
          <input onChange={InputHandler} className='form-control' type="text" placeholder='Search...' />
        </div>
      <table className="table">
  <thead className="thead">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Avatar</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
     loading ?
     <Skeleton/>
     :
     filteredUsers.map(user =>{
        return(
          <tr key={user.id}>
      <th scope="row">{user.id}</th> 
      <td><Avatar src={user.avatar} /></td>
      <td>{user.fname}</td>
      <td>{user.lname}</td>
      <td>{user.username}</td>
    </tr>
        )
      })
    }
  </tbody>
</table>
      </div>
    </div>
  )
}

export default UserList