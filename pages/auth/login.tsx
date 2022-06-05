import { Container, Grid } from '@mui/material';
import { Login } from '../../components/auth/Login';
import { Main } from '../../layouts/Main';
const LoginScreen = () => {
  const metaTags = {
    title: 'Login',
    description: 'Login',
  };
  return (
    <Main metaTags={metaTags}>
      <>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Grid item xs={12}>
            <Container
              maxWidth="lg"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Login />
            </Container>
          </Grid>
        </Grid>
      </>
    </Main>
  );
};

export default LoginScreen;
