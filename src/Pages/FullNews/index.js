import React from 'react'
import './styles.css'

import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import Detail from 'Components/DetailNews/index'


export default function FullNew(){
  return(
    <>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Detail/>
      </div>
    </>
  )
}