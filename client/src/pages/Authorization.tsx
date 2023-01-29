import React, { useContext, useState } from 'react';
import '../style/authorization.scss'
import Y from '../assets/Y.png'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';
import MyButton from '../components/UI/MyButton';
import MyForm from '../components/UI/MyForm';

const Authorization = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    
    return (
        <div className="auth__wrapper">
            <div className="leftSide">
                <img className='animate__animated animate__rubberBand' src={Y} alt="" />
            </div>
            <div className="rightSide">
                <div className="form__space">
                    <div className="form__title">{isLogin ? <p>Login</p> : <p>Registration</p>}</div>
                    <hr />
                    
                        <MyForm></MyForm>

                    <p>or</p>
                    {isLogin 
                    ?<p className='changePage'>No account? <NavLink to={REGISTRATION_ROUTE}> register </NavLink> </p>
                    :<p className='changePage'>have account? <NavLink to={LOGIN_ROUTE}> login </NavLink> </p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Authorization;