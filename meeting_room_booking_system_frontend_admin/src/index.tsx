import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { Index } from './pages/Index/Index'
import { Login } from './pages/Login/Login'
import { UserManage } from './pages/UserManage/UserManage'
import { Menu } from './pages/Menu/Menu'
import { InfoModify } from './pages/InfoModify/InfoModify'
import { ModifyMenu } from './pages/ModifyMenu/ModifyMenu'
import { PasswordModify } from './pages/PasswordModify/PasswordModify'

const routes = [
	{
		path: '/',
		element: <Index></Index>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Menu></Menu>,
				children: [
					{
						path: 'user_manage',
						element: <UserManage />,
					},
				],
			},
			{
				path: '/user',
				element: <ModifyMenu></ModifyMenu>,
				children: [
					{
						path: 'info_modify',
						element: <InfoModify />,
					},
					{
						path: 'password_modify',
						element: <PasswordModify />,
					},
				],
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
	},
]

export const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<RouterProvider router={router} />)
