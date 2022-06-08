import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import { FormGroup } from '@mui/material';

import { Input } from '../form/input/Input.component';
import { LoginInterface } from '../../interfaces';
import { default as InputComponent } from '@mui/material/Input';
interface InputComponent {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}




const inputs: InputComponent[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    rules: { required: 'This field is required' },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    rules: {
      required: 'This field is required',
    },
  },
];

export const Login = () => {
  const router = useRouter();
  const [blockButton, setBlockButton] = useState(false);
  const destination = router.query.page?.toString() ?? '/';
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit: SubmitHandler<LoginInterface> = async data => {
    setBlockButton(true);

    await signIn('credentials', {
      username: data.username,
      password: data.password,
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ fontWeight: 800 }}
      >
        Login In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Card sx={{ width: '100%', maxWidth: 300 }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {inputs.map((input: InputComponent) => {
                return (
                  <div key={input.name}>
                    <Input data={{ ...input, control, errors }} />
                  </div>
                );
              })}
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1.5,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={blockButton}
              >
                Login In
              </Button>
            </CardActions>
            <Divider variant="middle" />
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1.5,
                paddingBottom: '20px',
              }}
            >
              <Typography
                component="div"
                sx={{ margin: '5px 0 20px', fontSize: '12px' }}
              >
                Don't have an account yet? Sign up for free!
              </Typography>
              <Link href={`/auth/register?page=${destination}`}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  disabled={blockButton}
                >
                  Sign Up
                </Button>
              </Link>
            </CardActions>
          </Card>
        </FormGroup>
      </form>
      <Typography component="div" sx={{ m: 3.5, fontSize: '10px' }}>
        Forgot your password?
      </Typography>
    </>
  );
};
