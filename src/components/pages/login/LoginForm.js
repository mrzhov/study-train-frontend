import * as Yup from 'yup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import {
	Button,
	IconButton,
	InputAdornment, Link,
	Stack,
	TextField,
} from '@mui/material';
import {login} from "../../../api";
import {set} from "local-storage";
import {USER_DATA} from "../../../lib/variables";

const LoginForm = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		username: Yup.string().required('Поле является обязательным'),
		password: Yup.string().required('Поле является обязательным'),
	});

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: LoginSchema,
		onSubmit: async values => {
			const response = await login(values);
			set(USER_DATA, response);
			navigate('/', { replace: true });
		},
	});

	const { errors, touched, handleSubmit, getFieldProps } = formik;

	return (
		<FormikProvider value={formik}>
			<Form autoComplete='off' noValidate onSubmit={handleSubmit}>
				<Stack spacing={3}>
					<TextField
						fullWidth
						label='Логин'
						{...getFieldProps('username')}
						error={Boolean(touched.username && errors.username)}
						helperText={touched.username && errors.username}
					/>

					<TextField
						fullWidth
						autoComplete='current-password'
						type={showPassword ? 'text' : 'password'}
						label='Пароль'
						{...getFieldProps('password')}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
										<Icon icon={showPassword ? eyeFill : eyeOffFill} />
									</IconButton>
								</InputAdornment>
							),
						}}
						error={Boolean(touched.password && errors.password)}
						helperText={touched.password && errors.password}
					/>
				</Stack>

				<Stack spacing={2} alignItems='center' sx={{ mt: 2 }}>
					<Button fullWidth size='large' type='submit' variant='contained'>
						Войти
					</Button>

					<Link onClick={() => navigate('/auth/register')} sx={{ cursor: 'pointer' }}>
						Регистрация
					</Link>
				</Stack>
			</Form>
		</FormikProvider>
	);
};

export default LoginForm;
