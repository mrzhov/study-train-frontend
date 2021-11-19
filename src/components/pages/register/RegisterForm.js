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
import {register} from "../../../api";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const RegisterSchema = Yup.object().shape({
		username: Yup.string().required('Поле является обязательным'),
		email: Yup.string().email().required('Поле является обязательным'),
		phone: Yup.string().required('Поле является обязательным'),
		password: Yup.string().required('Поле является обязательным'),
	});

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			phone: '',
			password: '',
		},
		validationSchema: RegisterSchema,
		onSubmit: async values => {
			await register(values);
			navigate('/auth/login', { replace: true });
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
						label='Почта'
						{...getFieldProps('email')}
						error={Boolean(touched.email && errors.email)}
						helperText={touched.email && errors.email}
					/>

					<TextField
						fullWidth
						label='Телефон'
						{...getFieldProps('phone')}
						error={Boolean(touched.phone && errors.phone)}
						helperText={touched.phone && errors.phone}
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
						Зарегистрироваться
					</Button>

					<Link onClick={() => navigate('/auth/login')} sx={{ cursor: 'pointer' }}>
						Войти
					</Link>
				</Stack>
			</Form>
		</FormikProvider>
	);
};

export default RegisterForm;
