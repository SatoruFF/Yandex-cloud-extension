import React from 'react'
import MyBanner from '../components/UI/MyBanner';
import MyButton from '../components/UI/MyButton';
import MyStatus from '../components/UI/MyStatus';
import '../style/editUsers.scss'

const Edit = () => {
    return (
        <div className="edit__wrapper">
            <div className="edit__nav">
                <MyStatus>group name</MyStatus>
                <MyButton>assign roles</MyButton>
                <MyButton>add new user</MyButton>
            </div>
            <div className="edit__panel">
                <MyBanner>id</MyBanner>
                <MyBanner>nickname</MyBanner>
                <MyBanner>roles</MyBanner>
                <MyBanner>remove user</MyBanner>
                <MyBanner>edit role</MyBanner>
            </div>
        </div>
    );
}

export default Edit;