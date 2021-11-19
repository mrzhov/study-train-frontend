import * as Yup from 'yup';
import React, {useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {Button, Stack} from '@mui/material';
import FormikAutocomplete from "../../base/FormikAutocomplete";
import {getCities} from "../../../api/tickets";

const SearchTicketsForm = ({ setTickets }) => {
	const [cities, setCities] = useState(null);

	const SearchTicketsFormSchema = Yup.object().shape({
		cityFrom: Yup.object().required('Поле является обязательным'),
		cityTo: Yup.object().required('Поле является обязательным'),
	});

	const formik = useFormik({
		initialValues: {
			cityFrom: '',
			cityTo: '',
		},
		validationSchema: SearchTicketsFormSchema,
		onSubmit: values => {
			const newTickets = Array.from(Array(Math.floor(Math.random() * 5))).map(el => ({
				cityFrom: values.cityFrom.name,
				cityTo: values.cityTo.name,
				price: Math.floor(Math.random() * 10000) + 1000
			}))
			setTickets(newTickets);
			resetForm();
		},
	});

	const { handleSubmit, resetForm, values } = formik;

	const defaultOptionLabel = (option) => option ? option.name : '';

	useEffect(async () => {
		const response = await getCities();
		setCities(response);
	}, [])

	return (
		<>
			{cities && (
				<FormikProvider value={formik}>
					<Form autoComplete='off' noValidate onSubmit={handleSubmit}>
						<Stack spacing={3}>
							<FormikAutocomplete
								name='cityFrom'
								options={cities.filter(city => city.id !== values.cityTo.id)}
								textFieldProps={{ label: 'Откуда' }}
								getOptionLabel={defaultOptionLabel}
							/>
							<FormikAutocomplete
								name='cityTo'
								options={cities.filter(city => city.id !== values.cityFrom.id)}
								textFieldProps={{ label: 'Куда' }}
								getOptionLabel={defaultOptionLabel}
							/>
						</Stack>

						<Button fullWidth size='large' type='submit' variant='contained' sx={{ mt: 3 }}>
							Найти
						</Button>
					</Form>
				</FormikProvider>
			)}
		</>
	);
};

export default SearchTicketsForm;
