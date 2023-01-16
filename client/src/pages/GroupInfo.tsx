import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MyButton from '../components/UI/MyButton';
import MyStatus from '../components/UI/MyStatus';
import { EDIT_ROUTE } from '../utils/consts';
import '../style/groupInfo.scss'
import { useFetching } from '../hooks/useFetching';
import { FakeUsers } from '../http/placeholderService';
import MyLoader from '../components/UI/MyLoader';

const GroupInfo = () => {
    const [visitors, setVisitors]: any = useState([])
    const [comments, setComments]: any = useState([])

    const [fetchCommentsArray, isLoadingComments, commentsError]: any = useFetching( async () => {
        const response = await FakeUsers.getComments(4)
        setComments([...response])
    })

    const [fetchUsersArray, isLoadingUsers, userError]: any = useFetching( async () => {
        const response = await FakeUsers.getAllUsers()
        setVisitors([...response])
    })

    useEffect(() => {

        setTimeout(() => {
            fetchCommentsArray()
            fetchUsersArray()
        }, 4000)

    }, [])

    return (
        <div className="group__wrapper">
            <div className="navigation">
                <MyStatus>Group name</MyStatus>
                <MyStatus>Group id</MyStatus>
                <MyStatus>date.now()</MyStatus>
            </div>
            <div className="banners__group">


                    <div className="banner one">
                        <div className="group__banner__title">description</div>
                            {commentsError && 
                                <h1>${commentsError} is happened...</h1>
                            }
                            {isLoadingComments || !comments.length 
                            ? <MyLoader></MyLoader>
                            :
                                <div className="banner__items">
                                    <div className="banner__description">
                                        {comments.map((elem: any) => 
                                            <div className="banner__item">{elem.body}</div>
                                        )}
                                    </div>
                                </div>
                            }
                    </div>


                    <div className="banner two">
                            <div className="group__banner__title">users</div>
                                {userError && 
                                    <h1>${userError} is happened...</h1>
                                }
                            {isLoadingUsers || !visitors.length 
                            ? <MyLoader></MyLoader>
                            :   
                            <div className="banner__items">
                                <div className="visitors__list">
                                    {visitors.map((elem: any) => 
                                    <div className="visitors__item">{elem.name}</div>
                                )}
                                </div>
                            </div>
                            }
                    </div>


            </div>
            <div className="editButton"><MyButton>  <NavLink to={EDIT_ROUTE}>EDIT</NavLink>  </MyButton></div>
        </div>
    );
}

export default GroupInfo;