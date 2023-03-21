import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <img src='/img/logo.png'alt="" class="h-10 ml-5" />
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Pokemons">Pokemons</Link>
                </li>
                <li>
                    <Link to="/Mypokemons">My Pokemons</Link>
                </li>
                <li>
                    <Link to="/Todos">Todo list</Link>
                </li>
                <li>
                    <Link to="/IndexUser">Users</Link>
                </li>
                <li>
                    <Link to="/SignIn">Logout</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
    )
}

export default Navbar