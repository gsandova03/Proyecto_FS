import React from 'react'
import './styles.css'

export default function Navbar(){
  return(
    <div className='Navbar'>
      <div className='nav-list-items'>
        <a href='#' className='nav-item'>Locales</a>
        <a href='#' className='nav-item'>País</a>
        <a href='#' className='nav-item'>Política</a>
        <a href='#' className='nav-item'>Judicial</a>
        <a href='#' className='nav-item'>Economia</a>
        <a href='#' className='nav-item'>Entretenimiento</a>
        <a href='#' className='nav-item'>Barranquilla</a>
      </div>
    </div>
  )
}