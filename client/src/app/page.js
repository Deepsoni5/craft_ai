"use client"
import Hero from '@/components/layouts/Hero'
import Nav from '@/components/layouts/Nav'
import axios from 'axios';
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';


export default function Home() {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:8000/auth/login/success', {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication Failed")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => {
        console.log(err)
      })
    };
    getUser();
  },[])
  
  
  
  console.log(user)
  return (
    
    <div>
    
         <Nav user={user} />
        <Hero />
      
    
    </div>
  )
}
