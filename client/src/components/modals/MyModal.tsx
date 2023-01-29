import React from 'react';
import '../../style/MyModal.scss'
import MyForm from '../UI/MyForm';

const MyModal = ({children, visible, setVisible}: any) => {
    return (
        <div className={visible ? 'MyModal' : 'nothing'}>
            <div className="MyModalContent">
                {children}
                <MyForm></MyForm>
            </div>
        </div>
    );
}

export default MyModal;