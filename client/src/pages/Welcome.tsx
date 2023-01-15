import React from 'react'
import '../style/Welcome.scss'
import logo from '../assets/yandex.png'

const Welcome = () => {
    return (
        <div className="welcome__wrapper">
            <div className="welcome__banner animate__animated animate__fadeInDown">
            <img src={logo} alt="" />
                <div className="banner__title"> welcome</div>
                    <p>made by:</p>
                        <div className="banner__users animate__animated animate__fadeInDownBig">
                            <div className='banner__item'>satoruF</div>
                            <div className='banner__item '>username</div>
                            <div className='banner__item'>ra_lis</div>
                            <div className='banner__item'>int_dis</div>
                            <div className='banner__item'>rishat</div>
                            <div className='banner__item'>zz</div>
                            <div className='banner__item'>pavel</div>
                        </div>
            </div>
        </div>
    );
}

export default Welcome;