import React, { useEffect, useState } from 'react';
import '../style/personal.scss'
import avatar from '../assets/avatar.jpg'
import MyButton from '../components/UI/MyButton';
import MyStatus from '../components/UI/MyStatus';
import axios from 'axios'
import MyLoader from '../components/UI/MyLoader';
import { YandexUsers } from '../http/yandexService';

const Personal = () => {
    const [visitors, setVisitors]: any = useState([])
    // const [load, setLoad]: any = useState(false)

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setVisitors([...response.data])
        } catch (error) {
            
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers()

        }, 4000)

    }, [])

    return (
        <div className="personal__wrapper">
            <div className="left__sidebar">
                <div className="sidebar__avatar"> <img src={avatar} alt="" /> </div>
                <div className="status__title"> name: </div>
                    <MyStatus>  arina </MyStatus>
                    <div className="status__title"> status: </div>
                    <MyStatus>  student </MyStatus>
                    <div className="status__title"> budget: </div> 
                    <MyStatus> 100$ </MyStatus>
                    <MyButton> edit </MyButton>
                    <MyButton> fetch </MyButton>
            </div>
            <div className="banner first">
                <h1 className='banner__first__title'> {
                    visitors.length 
                    ?   <h1>My group name: {visitors[0].name}</h1> 
                    :   <MyLoader></MyLoader>
                }</h1>
                <p>other users in this group:</p>
                {/* {visitors.map((vis: any) => {
                    <h3>{vis.}</h3>
                })} */}
            </div>
            <div className="banner"></div>
        </div>
    );
}

export default Personal;
