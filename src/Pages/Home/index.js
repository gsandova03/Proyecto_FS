import React from 'react'
import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import News from 'Components/News/News'

import './styles.css'


export default function Home(){
  return(
    <>
      <Header/>
      <Navbar/>
      <div className='content'>
        <News />
      </div>
    </>
  )
}