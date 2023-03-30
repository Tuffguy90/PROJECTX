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
const loginUserData = JSON.parse(localStorage.getItem('_userData'));
const UserProfile = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [initVal, setInitVal] = useState(null);
    const handleClickShowPassword = (typeName) => {
        typeName === 'new_password' && setShowNewPassword(!showNewPassword);
        typeName === 'current_password' && setShowCurrentPassword(!showCurrentPassword);
        typeName === 'confirm_password' && setShowConfirmPassword(!showConfirmPassword);
    };

    useEffect(() => {
        authService.getUserList(loginUserData?.id).then(({ data }) => {
            setUserDetails(data?.data?.data[0]);
        });
    }, []);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const renderHeader = useMemo(() => {
        return <h1 className="mb-0 pb-0">User Profile</h1>;
    }, []);
    return (
        <ComponentSkeleton>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <Stack spacing={0}>
                        <MainCard title={renderHeader} codeHighlight>
                            <Formik
                                initialValues={{
                                    first_name: userDetails?.first_name,
                                    last_name: userDetails?.last_name,
                                    email: userDetails?.email,
                                    mobile: userDetails?.mobile,
                                    address: userDetails?.address,
                                    subsidiary: userDetails?.subsidary?.name,
                                    submit: null
                                }}
                                enableReinitialize={true}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().max(255).required('First Name is required'),
                                    last_name: Yup.string().max(255).required('Last Name is required'),
                                    email: Yup.string().max(255).required('Email is required'),
                                    mobile: Yup.string().max(255).required('Mobile is required'),
                                    address: Yup.string().max(255).required('Address is required'),
                                    subsidiary: Yup.string().max(255).required('Subsidiary is required')
                                })}
                                onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                                    try {
                                        let sendVal = { ...values };
                                        delete sendVal.subsidiary;
                                        sendVal.key = loginUserData.id;
                                        sendVal.updated_by = loginUserData.id;
                                        authService
                                            .updateUserProfileData({ ...sendVal })
                                            .then((response) => {
                                                if (response?.status === 200) {
                                                    sweetAlertBox('Success', 'Changes Done Successfully', 'success');
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
                                                    <InputLabel htmlFor="first_name">First Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.first_name && errors.first_name)}
                                                        id="first_name"
                                                        type="text"
                                                        value={values?.first_name}
                                                        name="first_name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter first name"
                                                    />
                                                    {touched.first_name && errors.first_name && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.first_name}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="last_name">First Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.last_name && errors.last_name)}
                                                        id="last_name"
                                                        type="text"
                                                        value={values?.last_name}
                                                        name="last_name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter last name"
                                                    />
                                                    {touched.last_name && errors.last_name && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.last_name}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="email">Email-Id</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.email && errors.email)}
                                                        id="email"
                                                        type="text"
                                                        value={values?.email}
                                                        name="email"
                                                        disabled={true}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter email"
                                                    />
                                                    {touched.email && errors.email && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="mobile">Mobile</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.mobile && errors.mobile)}
                                                        id="mobile"
                                                        type="text"
                                                        value={values?.mobile}
                                                        name="mobile"
                                                        disabled={true}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter mobile"
                                                    />
                                                    {touched.mobile && errors.mobile && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.mobile}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="address">Address</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.address && errors.address)}
                                                        id="address"
                                                        type="text"
                                                        value={values?.address}
                                                        name="address"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter address"
                                                    />
                                                    {touched.address && errors.address && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.address}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="subsidiary">Subsidiary</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth
                                                        error={Boolean(touched.subsidiary && errors.subsidiary)}
                                                        id="subsidiary"
                                                        type="text"
                                                        value={values?.subsidiary}
                                                        name="subsidiary"
                                                        disabled={true}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter subsidiary"
                                                    />
                                                    {touched.subsidiary && errors.subsidiary && (
                                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                                            {errors.subsidiary}
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
export default UserProfile;
