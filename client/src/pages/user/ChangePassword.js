// material-ui
import { InputAdornment, Grid, OutlinedInput, Stack, InputLabel, Button, FormHelperText, IconButton } from '@mui/material';

// project import
import ComponentSkeleton from '../../components/ComponentSkeleton';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import authService from 'services/auth.service';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { sweetAlertBox } from 'helpers/index';
// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = (typeName) => {
        typeName === 'new_password' && setShowNewPassword(!showNewPassword);
        typeName === 'current_password' && setShowCurrentPassword(!showCurrentPassword);
        typeName === 'confirm_password' && setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const renderHeader = useMemo(() => {
        return <h1 className="mb-0 pb-0">Change Password</h1>
    }, []);
    return (
        <ComponentSkeleton>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <Stack spacing={0}>
                        <MainCard title={renderHeader} codeHighlight>
                            <Formik
                                initialValues={{
                                    new_password: '',
                                    current_password: '',
                                    confirm_password: '',
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    current_password: Yup.string().max(255).required('Current Password is required'),
                                    new_password: Yup.string().max(255).required('New Password is required'),
                                    confirm_password: Yup.string().max(255).required('Confirm Password is required')
                                })}
                                onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                                    try {
                                        authService
                                            .changePassword(values)
                                            .then((response) => {
                                                if (response?.status === 200) {
                                                    resetForm({ new_password: '', current_password: '', confirm_password: '' });
                                                    sweetAlertBox('Success', 'Password Changes Successfully', 'success');
                                                } else {
                                                    sweetAlertBox('Oops', response?.data?.message, 'info');
                                                }
                                            })
                                            .catch((err) => {
                                                sweetAlertBox('Oops', err?.response?.data?.message, 'danger');
                                            });
                                        setStatus({ success: false });
                                        setSubmitting(false);
                                    } catch (err) {
                                        setStatus({ success: false });
                                        setErrors({ submit: err.message });
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="current_password">Current Password</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.current_password && errors.current_password)}
                                                        id="current_password"
                                                        type={showCurrentPassword ? 'text' : 'password'}
                                                        value={values.current_password}
                                                        name="current_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={() => handleClickShowPassword('current_password')}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                    size="large"
                                                                >
                                                                    {showCurrentPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        placeholder="Enter current password"
                                                    />
                                                    {touched.current_password && errors.current_password && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.current_password}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} />
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="new_password">Password</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.new_password && errors.new_password)}
                                                        id="new_password"
                                                        type={showNewPassword ? 'text' : 'password'}
                                                        value={values.new_password}
                                                        name="new_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={() => handleClickShowPassword(new_password)}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                    size="large"
                                                                >
                                                                    {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        placeholder="Enter new password"
                                                    />
                                                    {touched.new_password && errors.new_password && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.new_password}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="confirm_password">Confirm Password</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.confirm_password && errors.confirm_password)}
                                                        id="confirm_password"
                                                        type={showConfirmPassword ? 'text' : 'password'}
                                                        value={values.confirm_password}
                                                        name="confirm_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={() => handleClickShowPassword('confirm_password')}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                    size="large"
                                                                >
                                                                    {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        placeholder="Enter confirm password"
                                                    />
                                                    {touched.confirm_password && errors.confirm_password && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.confirm_password}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={8} />
                                            <Grid item xs={4}>
                                                <AnimateButton>
                                                    <Button
                                                        disableElevation
                                                        disabled={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                    >
                                                        Change
                                                    </Button>
                                                </AnimateButton>
                                            </Grid>
                                        </Grid>
                                    </form>
                                )}
                            </Formik>
                        </MainCard>
                    </Stack>
                </Grid>
            </Grid>
        </ComponentSkeleton>
    );
};

export default ChangePassword;
