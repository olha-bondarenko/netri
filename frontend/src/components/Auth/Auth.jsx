import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../../actions/auth';
import Input from './Input'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';

const initState = {
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
}
const Auth = () => {
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_SIGN_IN,
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setSignUp] = useState(false);
    const [formData, setFormData] = useState(initState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        setSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            dispatch(signUp(formData, navigate))
        } else {
            dispatch(signIn(formData, navigate))
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half={6}/>
                            <Input name='lastName' label='Last Name' handleChange={handleChange} half={6}/>
                            </>
                        )
                    }
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' autoFocus />
                    <Input 
                        name='password' 
                        label='Password' 
                        handleChange={handleChange} 
                        type={showPassword ? 'text' : 'password'} 
                        handleShowPassword={handleShowPassword}/>
                    { isSignUp && 
                    <Input 
                        name='confirmPassword' 
                        label='Confirm Password' 
                        handleChange={handleChange} 
                        type='password'/>}
                </Grid>
                <Button 
                    type='submit' 
                    fullWidth 
                    variant='contained' 
                    color='primary' 
                    className={classes.submit}>
                        { isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_SIGN_IN}
                render={(renderProps) => (
                    <Button 
                        className={classes.googleButton} 
                        color='primary' fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        startIcon={<Icon />} 
                        variant='contained'>
                            Google Sign In
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
                />
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account yet? Sign Up" }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth