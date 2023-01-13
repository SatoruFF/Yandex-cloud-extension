import React from 'react';
import '../style/authorization.scss'
import MyForm from '../components/UI/MyForm';
import Y from '../assets/Y.png'
import { REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';

const Authorization = () => {
    return (
        <div className="auth__wrapper">
            <div className="leftSide">
                <img className='animate__animated animate__rubberBand' src={Y} alt="" />
            </div>
            <div className="rightSide">
                <div className="form__space">
                    <div className="form__title">Authorization</div>
                    <hr />
                    <MyForm btnName={'submit'}/>
                    <p>or</p>
                    <p className='changePage'>No account? <NavLink to={REGISTRATION_ROUTE}> register </NavLink> </p>
                </div>
            </div>
        </div>
    );
}

export default Authorization;