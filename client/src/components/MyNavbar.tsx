import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/YLogo.png'
import '../style/Navbar.scss'
import { LOGIN_ROUTE, WELCOME_ROUTE, PERSONAL_ROUTE } from '../utils/consts';
import MyButton from './UI/MyButton';

const MyNavbar = () => {
    return (
        <div className="wrapper">
            <div className="logo">
                <NavLink to={WELCOME_ROUTE}><img src={logo} alt="" /></NavLink>
            </div>
            <NavLink to={PERSONAL_ROUTE}>test</NavLink>
            <div className="nav">
                <NavLink to={LOGIN_ROUTE}><MyButton>log in</MyButton></NavLink>
            </div>
        </div>
    );
}

export default MyNavbar;