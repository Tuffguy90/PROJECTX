import AuthForgotPassword from './component/AuthForgotPassword';
import AuthLogin from './component/AuthLogin';
import AuthWrapper from './component/AuthWrapper';
import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

const Auth = ({ type, title, desc }) => {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">{title}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    {type === 'login' && <AuthLogin />}
                    {type === 'forgot-password' && <AuthForgotPassword />}
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Auth;
