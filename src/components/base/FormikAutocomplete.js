import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Autocomplete, Chip, createFilterOptions, TextField, Typography } from '@mui/material';

const defaultOptionLabel = (option) => (option ? option.name : '');

const FormikAutocomplete = (props) => {
	const {
		name,
		disabled,
		options,
		getOptionLabel,
		textFieldProps,
		multiple = false,
		limit = 300,
	} = props;

	const { isSubmitting } = useFormikContext();
	const fieldProps = useField(name);
	const [field, meta, helpers] = fieldProps;

	const showError = meta.touched && !!meta.error;

	const filterOptions = createFilterOptions({ limit });

	return (
		<Autocomplete
			filterOptions={filterOptions}
			multiple={multiple}
			fullWidth
			clearText='Очистить'
			noOptionsText='Нет совпадений'
			openText='Открыть'
			disabled={disabled || isSubmitting}
			options={options}
			getOptionLabel={getOptionLabel || defaultOptionLabel}
			{...field}
			onChange={(_, value) => {
				helpers.setValue(value || (multiple ? [] : ''));
			}}
			renderTags={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip label={<Typography>{option.name}</Typography>} {...getTagProps({ index })} />
				))
			}
			onBlur={() => helpers.setTouched(true)}
			renderInput={params => (
				<TextField
					{...params}
					error={showError}
					helperText={showError && meta.error}
					inputProps={{ ...params.inputProps }}
					{...textFieldProps}
				/>
			)}
		/>
	);
};

export default FormikAutocomplete;
