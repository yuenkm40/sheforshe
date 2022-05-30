
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingLeft:theme.spacing(5),
    paddingRight:theme.spacing(5),
    width:450,
    borderRadius:15,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:"pink",
    borderRadius:15,
  },
  submit2: {
      marginTop:5,
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  input:{
      fontSize:15,
      height:'60%',
  },
}));