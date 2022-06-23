import './profile.scss'
import Background from '../assets/profileBg.jpeg'
import Lisa from '../assets/Lisa.jpg'
import { Grid, Paper, TextField } from  '@material-ui/core'
import useStyles from '../registration/styles.jsx'
export default function Profile() {
  const classes= useStyles();
  return (
    <div className="profile">
      <div className="top">
        <img className="profileCoverImg" src ={Background} alt=""/>
        <img className="profileUserImg" src ={Lisa} alt=""/>
        <h4 className="profileInfoName">Patricia Lee</h4>
        <span className="profileInfoDesc">I am a tech enthusiast</span>
      </div>

      <div className="bottom">
        <Paper elevation={0} style={{width:500,height:300, padding:20}}>
        <form style={{width:500,height:250}}>
        <Grid container spacing={2} style={{height:250}}>
        <Grid item xs={12} sm={12} >
        <TextField name="emailAddress" 
        type="password" 
        label="Old Password"  
        variant="outlined" 
        fullWidth
        InputLabelProps={{className: classes.input}}
        style={{width:450,justifyContent:'center',marginTop:20}}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField name="newPassword" 
        type="password" 
        label="New Password"
        variant="outlined" 
        fullWidth
        InputLabelProps={{className: classes.input}}
         style={{width:450,justifyContent:'center'}}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField name="confirmNewPassword" 
        type="password" 
        label="Confirm New Password" 
        variant="outlined" 
        fullWidth
        InputLabelProps={{className: classes.input}}
        style={{width:450,justifyContent:'center'}}/>
        </Grid>
        </Grid>
        </form>
        </Paper>
      </div>
    </div>
  )
}
