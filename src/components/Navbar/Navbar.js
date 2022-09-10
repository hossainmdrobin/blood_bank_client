import React, { useState, useEffect } from 'react';
import style from './navbar.module.css'
import logo from './../../assets/logo.png'
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [nav, setNav] = useState('')
    useEffect(()=>{
        window.addEventListener('resize',()=>setIsOpen(false))
    },[])
    return (
        <>
            <nav id='navbar' className={style.navbar}>
                <div className={style.nav}>
                    <Link to='/' className={style.logoContainer}>
                        <img className={style.logo} src={logo} alt="" />
                    </Link>
                    <ul>
                        <li onClick={() => setNav('')} className={`${nav === '' ? style.active : ''}`}><a href="#home">Home</a><span></span></li>
                        <li onClick={() => setNav('banks')} className={`${nav === 'banks' ? style.active : ''}`}><a href="#banks">Banks</a><span></span></li>
                        <li onClick={() => setNav('doctors')} className={`${nav === 'doctors' ? style.active : ''}`}><a href="#doctors">Doctors</a><span></span></li>
                        <li onClick={() => setNav('patients')} className={`${nav === 'patients' ? style.active : ''}`}><a href="#patients">Patients</a><span></span></li>
                        <li onClick={() => setNav('donors')} className={`${nav === 'donors' ? style.active : ''}`}><a href="#donors">Donors</a><span></span></li>
                    </ul>
                    <div onClick={() => setIsOpen(true)} className={style.icon}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>

                </div>
            </nav>
            <NavDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}

export default Navbar;
