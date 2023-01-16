import React, { useContext } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom';
import { AuthContext } from '../context';
import { authRoutes, publicRoutes, RouteModel } from '../routes';
import {WELCOME_ROUTE, PERSONAL_ROUTE} from '../utils/consts'

const AppRouter = () => {

    const {isAuth, setIsAuth}: any = useContext(AuthContext)

    return (
        isAuth
        ?
        <Routes>
            {authRoutes.map(({path, Component}: RouteModel) => 
            <Route key={path} path={path} element={<Component/>}></Route>
            )}
        <Route path="/*" element={<Navigate replace to={PERSONAL_ROUTE} />} />
        </Routes>
        :   
        <Routes>
            {publicRoutes.map(({path, Component}: RouteModel) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="/*" element={<Navigate replace to={WELCOME_ROUTE} />} />
        </Routes>
    );
}

export default AppRouter;