import React from 'react'
import '../../style/MyButton.scss'

const MyButton = ({children, ...props}: any) => {
    return (
        <button {...props} className='myBtn'>{children}</button>
    );
}

export default MyButton;