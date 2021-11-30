import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Header() {

    return (
        <header className='bg-green-400 flex justify-start p-4 text-4xl mb-2 font-bold'>
        <h1>
        Cookie Stand Admin
        </h1>
      </header>
    )
        
    }