import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { get } from 'local-storage';
import ErrorPage from "../pages/Error";
import {USER_DATA} from "../lib/variables";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import MainPage from "../pages/Main";

const Router = () => {
	const user = get(USER_DATA);

	const routes = [
		{
			path: '/',
			// element: !user ? <Navigate to='/auth/login' /> : <Navigate to='/' />,
			children: [{ path: '/', element: <MainPage /> }],
		},
		{
			path: '/auth',
			children: [
				{ path: '/auth/login', element: <LoginPage /> },
				{ path: '/auth/register', element: <RegisterPage /> }
			],
		},
		{
			path: '/',
			children: [
				{ path: '404', element: <ErrorPage /> },
				{
					path: '/',
					element: !user ? <Navigate to='/auth/login' /> : <Navigate to='/' />,
				},
			],
		},
		{ path: '*', element: <Navigate to='/404' replace /> },
	];

	return useRoutes(routes);
};

export default Router;
