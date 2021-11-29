import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home(event) {
  const [stand, setStand] = useState([]);

    function formHandler(event) {
      event.preventDefault()
        const form = {
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value
        }  
        setStand(result => [...result, form])
      }
  
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      
      <header className='bg-green-400 flex justify-start p-4 text-2xl mb-2'>
        <h1>
        Cookie Stand Admin
        </h1>
      </header>
      <main>
        
        <form action="" onSubmit={formHandler} className='flex flex-col justify-center bg-green-300 w-3/4 mx-auto p-2'>
        <h2 htmlFor="" className='mx-auto flex justify-center'>Create Cookie Stand</h2>
          <div className='flex-auto flex justify-center w-1/2'>
        <label>Location</label>
          <input type="text" name='location' />
          </div>
          <div className='flex'>
          <div className=''>
          <label>Minimum Customers per Hour</label>
          <input type="number" name='minCustomers' />
          </div>
          <div>
          <label>Maximum Customers per Hour</label>
          <input type="number" name='maxCustomers' />
          </div>
          <div>
          <label>Average Cookies per Sale</label>
          <input type="number" name='avgCookies' />
          </div>
          <input type="submit" value ="Create" className = 'px-2' />
          </div>
        </form>
        <div className='flex justify-center'>
        {stand.map(item => {
                        return (
                            <p className='flex flex-col'>{JSON.stringify(item)}</p>
                        )
                    })
                }
        </div>
      </main>
      <footer className = 'bg-green-400 bottom-0 fixed w-full'>
        &copy; 2021
      </footer>
    </div>
  )
}
