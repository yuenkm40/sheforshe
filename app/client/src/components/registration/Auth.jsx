import React, {useState, useEffect} from 'react'
import { Button, Paper, Grid, Container} from '@material-ui/core'
import useStyles from './styles'
import Input from './Input'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import { AUTH } from '../../constants/actionTypes'
import Icon from './Icon'
import {gapi} from "gapi-script"
import { useNavigate } from 'react-router-dom'
import {signin, signup} from '../../actions/auth'

const initialState= {firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

export default function Auth() {
  useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"285319930983-t5okhntrkvimjfbhhhelucitfn7l3j1n.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }
  };

  const handleChange= (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const[formData, setFormData] = useState(initialState);

  const googleSuccess= async (res) =>{
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({type:'AUTH', data: {result,token}});
      navigate('/partners');
    } catch(error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log("Google Sign In was unsuccessful.");
    console.log(error);
  };

  return (
    <Container component="main">
      <Paper className={classes.paper} elevation={0}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar> */}
        <h1 style={{fontWeight:500, marginTop:6, fontSize:30}}>{isSignup? 'Join SheforShe' : 'Welcome Back'}</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
          {
            isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
               
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type = "email"/>
            <Input name="password" label ="Password" handleChange={handleChange} type={showPassword? 'text' :'password'} handleShowPassword={handleShowPassword}/>
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>

          <GoogleLogin clientId="285319930983-t5okhntrkvimjfbhhhelucitfn7l3j1n.apps.googleusercontent.com" render={(renderProps) => (
            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>)}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ?'Sign Up': 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode} className={classes.submit2}>
                  {isSignup? 'Already have an account? Sign In':"Don't have an account? Sign Up"}
                </Button>
              </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
