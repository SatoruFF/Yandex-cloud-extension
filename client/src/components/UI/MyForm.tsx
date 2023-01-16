import React, { useContext, useState } from 'react'
import MyButton from './MyButton';
import '../../style/MyForm.scss'
import { AuthContext } from '../../context';

const MyForm = () => {
    const [email, setEmail]: any = useState('')
    const [pass, setPass]: any = useState('')
    const {isAuth, setIsAuth}: any = useContext(AuthContext)

    const login: any = (e: any) => {
        e.preventDefault()
        setIsAuth(true)
    }
    
    return (
        <form onSubmit={login} className='myForm'>
            <input type="email" placeholder='input email here...'/>
            <input type="password" placeholder='input password here...'/>
            <MyButton>submit</MyButton>
        </form>
    );
}

export default MyForm;