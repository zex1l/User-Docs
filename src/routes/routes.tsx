import { createHashRouter } from "react-router-dom"

import Home from "../pages/Home/Home"
import App from "../App"
import ProtectendRoute from "../components/ProtectedRoute/ProtectendRoute"
import SignIn from "../modules/auth/page/SignIn"
import NotFound from "../pages/NotFound/NotFound"
import UserDocsEdit from "../modules/UserDocs/page/UserDocsEdit/UserDocsEdit"
import CreateUserDoc from "../modules/UserDocs/page/CreateUserDoc/CreateUserDoc"


export const routes = createHashRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <ProtectendRoute ><Home/></ProtectendRoute>,
            }, 
            {
                path: '/doc/edit/:id',
                element: <ProtectendRoute><UserDocsEdit/></ProtectendRoute>
            },
            {
                path: '/doc/create',
                element: <ProtectendRoute><CreateUserDoc/></ProtectendRoute>
            },
            {
                path: '/sign_in',
                element: <SignIn/>
            },

        ]
    }, 
    {
        path: '*',
        element: <NotFound/>
    }
])