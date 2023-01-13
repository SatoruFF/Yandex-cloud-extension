import Access from "./pages/Access"
import Authorization from "./pages/Authorization"
import GroupInfo from "./pages/GroupInfo"
import Personal from "./pages/Personal"
import Users from "./pages/Users"
import Welcome from "./pages/Welcome"
import { ACCESS_ROUTE, GROUP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE, WELCOME_ROUTE, PERSONAL_ROUTE } from "./utils/consts"


export interface RouteModel {
    path: string
    Component: any
}

export const authRoutes = [
    {
        path: PERSONAL_ROUTE,
        Component: Personal,
    },
    {
        path: ACCESS_ROUTE,
        Component: Access,
    },
    {
        path: USERS_ROUTE,
        Component: Users,
    },
    {
        path: GROUP_ROUTE + '/:id',
        Component: GroupInfo,
    },
]

export const publicRoutes = [
    {
        path: WELCOME_ROUTE,
        Component: Welcome,
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authorization,
    },

]