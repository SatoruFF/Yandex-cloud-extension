import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom';
import { authRoutes, publicRoutes, RouteModel } from '../routes';
import {WELCOME_ROUTE} from '../utils/consts'

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(({path, Component}: RouteModel) => 
            <Route key={path} path={path} element={<Component/>}></Route>
            )}
            {publicRoutes.map(({path, Component}: RouteModel) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="/*" element={<Navigate replace to={WELCOME_ROUTE} />} />
        </Routes>
    );
}

export default AppRouter;