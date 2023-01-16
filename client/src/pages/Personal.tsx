import React, { useEffect, useState } from 'react';
import '../style/personal.scss'
import avatar from '../assets/avatar.jpg'
import MyButton from '../components/UI/MyButton';
import MyStatus from '../components/UI/MyStatus';
import MyLoader from '../components/UI/MyLoader';
import { FakeUsers } from '../http/placeholderService';
import { NavLink } from 'react-router-dom';
import { GROUP_ROUTE } from '../utils/consts';
import { useFetching } from '../hooks/useFetching';

const Personal = () => {
    const [visitors, setVisitors]: any = useState([])
    const [modalView, setModalView]: any = useState(false)

    const [fetchUsersArray, isLoading, userError]: any = useFetching( async () => {
        const response = await FakeUsers.getAllUsers()
        setVisitors([...response])
    })

    useEffect(() => {

        setTimeout(() => {
            fetchUsersArray()
        }, 4000)

    }, [])


    return (
        <div className="personal__wrapper">


            <div className="left__sidebar animate__animated animate__backInLeft">
                <div className="sidebar__avatar"> <img src={avatar} alt="" /> </div>
                    <div className="status__title"> 
                        <p>name:</p>
                        <MyStatus>  patrica lumumba </MyStatus>
                    </div>
                    <div className="status__title"> 
                        <p>status:</p>
                        <MyStatus>  student </MyStatus>
                    </div>
                    <div className="status__title"> 
                        <p>budget:</p>
                        <MyStatus> 100$ </MyStatus>
                    </div> 
                    <MyButton> edit </MyButton>
            </div>


            <div className="banner first">
                {userError && 
                    <h1>${userError} is happened...</h1>
                }
                {isLoading || !visitors.length 
                ? <MyLoader/>
                : 
                <div className="first">
                    <div className='banner__first__title'> 
                            <h1>My group</h1>
                            <h1>Group Leader : {visitors[0].name}</h1> 
                        </div>
                        <p>other users in this group:</p>
                            {visitors.map((elem: any) => 
                            <MyStatus key={elem.id}>{elem.name}</MyStatus>)}
                </div>
                }
            </div>


            <div className="banner second">
                {userError && 
                    <h1>error ${userError} is happened...</h1>
                }
                {isLoading || !visitors.length 
                    ? <MyLoader/>
                    : 
                    <div className="second">
                        <MyButton> <NavLink to={GROUP_ROUTE}>Full info about this group</NavLink> </MyButton>
                        <MyButton onCLick={() => setModalView(true)}>Create new group</MyButton>
                        <p>Group character:</p>
                        <MyStatus>Your group name: {visitors[3].name}</MyStatus>
                        <MyStatus>Your id: {visitors[3].id}</MyStatus>
                        <MyStatus>user count: {visitors.length} Users</MyStatus>
                </div>
                }
            </div>


        </div>
    );
}

export default Personal;
