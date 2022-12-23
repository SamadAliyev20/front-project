import { Avatar, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link} from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';



   const Users = () => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true)
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');  
    const [check,setCheck] = useState(false); 


    useEffect(() =>{
        const getUsers=async () =>{
          const response=await axios.get("  http://localhost:3005/users")
          setUsers(response.data);
          setLoading(false)
        }
         
        
       getUsers();
       },[])


    const CheckHandler =  () =>{
        if(username === 'admin' && password ==='admin123'){
            alert("Xoş Gəlmisiniz")
            setCheck(true)
        }
        else{
            alert("Yanlış ad və ya şifrə daxil etdiniz!!")
        }
    }
    const DeleteHandler = () =>{
     
    }
    
  return (
    <div>
    {
     check ?
     <div className="container">
      <div className="col-lg-12 tablee">
      <div className="col-lg-3 col-7">
      <Link to='/add'className=" mt-3 btn btn-primary w-100">Add User</Link>
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
     users.map(user =>{
        return(
          <tr key={user.id}>
      <th scope="row">{user.id}</th> 
      <td><Avatar src={user.avatar} /></td>
      <td>{user.fname}</td>
      <td>{user.lname}</td>
      <td>{user.username}</td>
      <ButtonGroup>
      <td><button value={user.id} onClick={()  => {axios.delete(`http://localhost:3005/users/${user.id}`,alert('Uğurla silindi!'),window.location.reload())}} className='btn btn-danger'>delete</button></td>
       <td><Link to={`/edit/${user.id}`} value={user.id} className='btn btn-warning'>Update</Link></td>
      </ButtonGroup>
    </tr>
        )
      })
    }
  </tbody>
</table>
      </div>
    </div>
     :
   <div className="col-lg-3 md-6 col-9 mx-auto mt-5">
    <div className="form-outline mb-3">
        <input onChange={(e) =>{setUserName(e.target.value)}} className='form-control' type="text" placeholder='UserName' />
    </div>
    <div className="form- mb-3">
    <input onChange={(e) =>{setPassword(e.target.value)}} className='form-control' type="password" placeholder='Password' />

    </div>
    <button onClick={CheckHandler} className='btn btn-success w-100'>Log In</button>
   </div>


    }
   </div>
   
  
  )
}

export default Users