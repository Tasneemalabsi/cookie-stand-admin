import CreateForm from './CreateForm'
import { useState } from 'react'
import ReportTable from './ReportTable';

export default function Main(event) {
    const [stand, setStand] = useState([]);
    const [store, setStore] = useState([])

    function formHandler(event) {
      event.preventDefault()
        const form = {
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value
        }  
        const standLocation={
            location:event.target.location.value,
            hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
          }
          setStore(result=>[...result, standLocation])

        setStand(render => [...render, form])

      }
     
    return(
<main>
        <CreateForm formHandler={formHandler}/>
      
        <div className='flex justify-center'>
        {stand.length? <ReportTable stands = {store} />: <h2>No Cookie Stands Available</h2>
                }
        </div>
      </main>
    )
            }