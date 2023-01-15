import React from 'react'
import '../../style/MyStatus.scss'

const MyStatus = ({children}: any) => {
    return (
        <div className="status__wrapper">
            {children}
        </div>
    );
}

export default MyStatus;