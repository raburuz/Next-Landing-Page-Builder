import React, { useContext, useState } from 'react';
import { RegisterOptions, useForm,SubmitHandler } from 'react-hook-form';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../context';
import style from './settings.module.css'
import { SettingsUserInterface } from '../../interfaces';
import { Input } from '../form/input/Input.component';
import { updateApi } from '../../apis/authApi';




interface InputComponent {
    name: string;
    label: string;
    type?: string;
    defaultValue?: string;
    rules?: RegisterOptions;
  }
  


 export function AuthSettings() {
  const [value, setValue] = React.useState({});
  const [blockButton, setBlockButton] = useState(false);
  const { userData, logout } = useContext(AuthContext);
  console.log(userData);


  const onSubmit: SubmitHandler<SettingsUserInterface> = async data => {
    


 
    if(userData != null){
      const value = await updateApi(data,userData.user?.id ?? '');
      console.log(value);
      // setBlockButton(true);

    }
 

  }


  const inputs: InputComponent[] = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      defaultValue:userData.user?.username,
     
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      rules: {
        required: 'This field is required',
      },
     
    },
    {
      name: 'newPassword',
      type: 'password',
      label: 'New Password',
    
     
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      defaultValue:userData.user?.email,

     
    },
    {
      name: 'role',
      type: 'hidden',
      label:'',
      defaultValue: 'NORMAL_USER_ROLE',

     
    },
  ];

  
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<SettingsUserInterface>();

  const username = inputs[0];

  return (
    <Box
      sx={{width:'100%'}}
    >
 
        <div className={style.Contsetting}>
            <h1 className={style.titleUser}>User setting</h1>
            <div className={style.log}>
                <div className={style.imagePerfil}>
                <Stack direction="row" spacing={10}>
                    <Avatar  sx={{ width: 250, height: 250 }} alt="Usuario" src="/static/images/avatar/1.jpg" />
                </Stack>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className= {style.inputPerfil}>
                        {inputs.map((input: InputComponent) => {
                          return (
                            <div key={input.name}>
                              <Input data={{ ...input, control, errors }} />
                            </div>
                          );
                      })}
                    <Button  type="submit" disabled={blockButton} variant="text" sx={{background:'purple',color:'white'}}>Update</Button>
                </div>
                </form>
            </div>
        </div>  
    </Box>
    
  );
}