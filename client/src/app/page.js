"use client"
import Hero from '@/components/layouts/Hero'
import Nav from '@/components/layouts/Nav'
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    
    const getUser = () => {
   
      axios.get("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
     
      })
        .then((response) => {
       
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log("object")
          setUser(resObject.user);
        })
        .catch((err) => {
           
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user)
  return (
    <>
      <Nav user={user} />
      <Hero />

    </>
  )
}
