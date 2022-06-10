import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { Alert, FormControl, FormHelperText, Snackbar } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { default as InputComponent } from '@mui/material/Input';
import { useState } from 'react';

interface Props {
  data: {
    name: string;
    control: Control<any>;
    label: string;
    type?: string;
    defaultValue?: string;
    rules?: RegisterOptions;
    errors?: any;
  };
}

export const Input = ({ data }: Props) => {

 
  const {
    name,
    control,
    label,
    type = 'text',
    defaultValue = '',
    rules,
    errors,
  } = data;
  const haveError =
    errors?.[name as keyof typeof errors] !== undefined ? true : false;

  return (
    <FormControl
      sx={{ margin: '15px ', width: '28ch' }}
      variant="standard"
      error={haveError}
    >
      <InputLabel htmlFor={name} sx={{ fontSize: 15 }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <InputComponent id={name} type={type} {...field}  />
        )}
      />
    

    
      {errors && (
        <FormHelperText id="my-helper-text">
          {errors[name as keyof typeof errors]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
