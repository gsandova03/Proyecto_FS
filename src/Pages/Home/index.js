import React from 'react'
import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import News from 'Components/News/News'


export default function Home(){
  return(
    <>
      <Header/>
      <Navbar/>
      <News />
    </>
  )
}