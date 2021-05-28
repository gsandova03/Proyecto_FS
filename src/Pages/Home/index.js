import React, {useContext} from 'react'
import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import News from 'Components/News/News'

import './styles.css'

const token = localStorage.getItem("token");

export default function Home(){

  console.log(token)
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