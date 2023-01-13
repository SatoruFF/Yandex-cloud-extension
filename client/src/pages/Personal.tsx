import React, { useEffect, useState } from 'react';
import '../style/personal.scss'
import avatar from '../assets/avatar.jpg'
import MyButton from '../components/UI/MyButton';
import axios from 'axios'

const Personal = () => {
    const [users, setUsers]: any = useState([{}])

    const fetch: any = async () => {
        const userData: any = axios.get('https://jsonplaceholder.typicode.com/users')
        await setUsers(userData)
    }

    return (
        <div className="personal__wrapper">
            <div className="left__sidebar">
                <div className="sidebar__avatar"> <img src={avatar} alt="" /> </div>
                <MyButton>arina</MyButton>
                <MyButton>student</MyButton>
                <MyButton>budget</MyButton>
                <MyButton>edit</MyButton>
                <MyButton onClick={fetch} >fetch</MyButton>
            </div>
            <div className="banner first">
                {users.map((user: any) => 
                    <div className="id">{user.id}</div>
                )}
            </div>
            <div className="banner"></div>
        </div>
    );
}

export default Personal;
