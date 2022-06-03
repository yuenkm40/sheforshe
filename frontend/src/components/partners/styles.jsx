import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  input: {
    fontSize:15,
    height:'60%',
  },
  button:{
    width:'10%',
    alignItems:'center',
    marginTop:10,
 
  },
}));