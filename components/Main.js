import CreateForm from './CreateForm'
import { useState } from 'react'
import ReportTable from './ReportTable';
import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'


export default function Main() {
    const { user, login, logout } = useAuth();
    const { resources, loading, createResource, deleteResource } = useResource();
    const [stand, setStand] = useState([]);
    const [store, setStore] = useState([])
    console.log(stand);
    
  function formHandler(event) {
    event.preventDefault()
      const form = {
          location: event.target.location.value,
          minCustomers: event.target.minCustomers.value,
          maxCustomers: event.target.maxCustomers.value,
          avgCookies: event.target.avgCookies.value,
          hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
          owner: user.username

      } 
      createResource(form);
      event.target.reset(); 
      const standLocation={
          location:event.target.location.value,
          hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
        }
      setStore(result=>[...result, standLocation])

      setStand(render => [...render, form])

    }

return(
<main>
        <CreateForm formHandler={formHandler} onCreate={createResource}/>
      
        <div className='flex justify-center'>
        {resources.length?<ReportTable stands = {resources} loading={loading} onDelete={deleteResource} />:<h2>No Cookie Stand Available</h2>}
              
        </div>
      </main>
    )
            }