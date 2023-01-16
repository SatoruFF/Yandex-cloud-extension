import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/YLogo.png'
import { AuthContext } from '../context';
import '../style/Navbar.scss'
import { LOGIN_ROUTE, WELCOME_ROUTE, PERSONAL_ROUTE, EDIT_ROUTE, GROUP_ROUTE} from '../utils/consts';
import MyButton from './UI/MyButton';

const MyNavbar = () => {
    const {isAuth, setIsAuth}: any = useContext(AuthContext)

    const exit: any = () => {
        setIsAuth(false)
    }

    return (
        isAuth
        ?
        <div className="wrapper ex">
            <div className="logo">
                <NavLink to={PERSONAL_ROUTE}><img src={logo} alt="" /></NavLink>
            </div>
            <NavLink to={LOGIN_ROUTE} onClick={exit}><MyButton>exit</MyButton></NavLink>
        </div>
        :
        <div className="wrapper">
            <div className="logo">
                <NavLink to={WELCOME_ROUTE}><img src={logo} alt="" /></NavLink>
            </div>
            <div className="nav">
                <NavLink to={LOGIN_ROUTE}><MyButton>log in</MyButton></NavLink>
            </div>
        </div>
    );
}

export default MyNavbar;