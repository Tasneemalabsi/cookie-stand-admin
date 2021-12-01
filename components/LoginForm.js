import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import { useState } from 'react'

export default function LoginForm(){
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  const [stand, setStand] = useState([]);

  function handleLogIn(event){
      event.preventDefault()
       const username = event.target.username.value
       const password = event.target.password.value
       login(username,password)
      }
  return (
      <form action="" onSubmit={handleLogIn} className='flex flex-col justify-center bg-green-300 w-10/12 mx-auto p-2 my-6 rounded-xl'>
          <label className='text-center'>User Name</label>
          <input name='username' type='text' placeholder='User Name' className='p-2 m-2 rounded-sm'/>
          <label className='text-center'>Password</label>
          <input name='password' type='text' placeholder='Password' className='p-2 m-2 rounded-sm'/>
          
          <button type='submit' className='bg-green-500 p-2 rounded-l'>SIGN IN</button>
      </form>
  )
  

}