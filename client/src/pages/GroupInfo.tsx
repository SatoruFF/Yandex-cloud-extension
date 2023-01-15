import React from 'react';
import MyButton from '../components/UI/MyButton';
import MyStatus from '../components/UI/MyStatus';
import '../style/groupInfo.scss'

const GroupInfo = () => {
    return (
        <div className="group__wrapper">
            <div className="navigation">
                <MyStatus>Group name</MyStatus>
                <MyStatus>Group id</MyStatus>

                <MyStatus>date now</MyStatus>
            </div>
            <div className="group__banner one">
                <div className="group__banner__title">description</div>
            </div>
            <div className="group__banner two">
                <div className="group__banner__title">users</div>
            </div>
            <div className="editButton"><MyButton>EDIT</MyButton></div>
        </div>
    );
}

export default GroupInfo;