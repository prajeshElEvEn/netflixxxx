import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import Avatar from '../assets/images/avatar.png'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])


    return (
        <div className={`navbar ${show && "nav-black"}`}>
            <div className="nav-items">
                <img src={Logo} alt="Logo" className='nav-logo' />
                <img src={Avatar} alt="Avatar" className='nav-avatar' />
            </div>
        </div>
    )
}

export default Navbar
