import React from 'react'
import '../../style/MyForm.scss'
import MyButton from './MyButton';

const MyForm = ({btnName}: any) => {
    return (
            <form className='myForm'>
                <input type="email" placeholder='input email here...'/>
                <input type="password" placeholder='input password here...'/>
                <MyButton>{btnName}</MyButton>
            </form>
    );
}

export default MyForm;