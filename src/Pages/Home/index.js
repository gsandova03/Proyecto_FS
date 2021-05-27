import React, {useContext} from 'react'
import Header from 'Components/Header/Header'
import Navbar from 'Components/Navbar/Navbar'
import News from 'Components/News/News'
import newsContext from 'Context/newsContext'

import './styles.css'




export default function Home(){
  const context = useContext(newsContext)
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