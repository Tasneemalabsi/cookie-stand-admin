import { useState } from 'react'

export default function CreateForm(props){
  
    return (
<form action="" onSubmit={props.formHandler} className='flex flex-col justify-center bg-green-300 w-10/12 mx-auto p-2 my-6 rounded-xl'> 
          <label className='px-6 mx-4 text-center font-bold'>ADD LOCATION</label>
          <div className='flex-auto flex justify-center mx-12 '>
          <input type="text" name='location' className='w-8/12' placeholder='Cookie Stand Location' required/>
          <input type="submit" value ="Create stand" className = 'px-20 py-2 text-xl bg-green-500 rounded w-4/12 mx-4' />

          </div>
          <div className='flex py-2 px-3 '>
          <div className='py-4  mx-2 rounded text-center'>
          <label className='font-bold'>Minimum Customers per Hour</label>
          <input type="number" name='minCustomers' className='py-2 px-6' placeholder='0' required/>
          </div>
          <div className='py-2  mx-2 rounded text-center'>
          <label className='font-bold'>Maximum Customers per Hour</label>
          <input type="number" name='maxCustomers' className='py-2 px-6' placeholder='0' required/>
          </div>
          <div className='py-2  mx-2 rounded text-center'>
          <label className='font-bold'>Average Cookies per Sale</label>
          <input type="number" name='avgCookies' className='py-2 px-6' placeholder='0' required/>
          </div>
          </div>
        </form>
    )
}