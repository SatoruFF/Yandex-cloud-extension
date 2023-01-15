import Access from "./pages/EditGroup"
import Authorization from "./pages/Authorization"
import GroupInfo from "./pages/GroupInfo"
import Personal from "./pages/Personal"
import Welcome from "./pages/Welcome"
import { EDIT_ROUTE, GROUP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WELCOME_ROUTE, PERSONAL_ROUTE } from "./utils/consts"
import Edit from "./pages/EditGroup"


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
        path: EDIT_ROUTE,
        Component: Edit,
    },
    // {
    //     path: ACCESS_ROUTE,
    //     Component: Access,
    // },
    // {
    //     path: USERS_ROUTE,
    //     Component: Users,
    // },
    {
        path: GROUP_ROUTE,
        Component: GroupInfo,
    },
]
//         path: GROUP_ROUTE + '/:id',

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