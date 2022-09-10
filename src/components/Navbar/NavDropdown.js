import React from 'react'
import style from './navDropdown.module.css'

export default function NavDropdown({ isOpen, setIsOpen }) {
  return (
    <div className={`${style.NavDropdown} ${!isOpen ? style.hide : ''}`} >
      <div className={style.icon}>
        <ion-icon onClick={()=>setIsOpen(false)} name="close-circle-outline"></ion-icon>
      </div>
      <div className={style.container}>
        <ul>
          <li><a onClick={() => setIsOpen(false)} href="#home">Home</a><span></span></li>
          <li><a onClick={() => setIsOpen(false)} href="#banks">Banks</a><span></span></li>
          <li><a onClick={() => setIsOpen(false)} href="#doctors">Doctors</a><span></span></li>
          <li><a onClick={() => setIsOpen(false)} href="#patients">Patients</a><span></span></li>
          <li><a onClick={() => setIsOpen(false)} href="#donors">Donors</a><span></span></li>
        </ul>
      </div>
    </div>
  )
}
