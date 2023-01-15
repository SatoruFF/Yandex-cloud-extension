import React from 'react'
import '../../style/MyBanner.scss'
import MyStatus from './MyStatus';

const MyBanner = ({children, ...props}: any) => {
    return (
        <div className="banner__wrapper" {...props}>
            <MyStatus>{children}</MyStatus>
        </div>
    );
}

export default MyBanner;